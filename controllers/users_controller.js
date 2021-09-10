const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const deepen = require("../helpers/deepen");
const beepen = require("../helpers/beepen");
const StatusEnum = require("../helpers/StatusEnum");

async function searchID(id) {
  try {
    return new Promise((res, rej) => {
      db.all(`SELECT id FROM users WHERE id = (?)`, id, (error, rows) => {
        if (error) return res(`Erro na requisição`);
        if (rows.length == 0) return res(`usuário não localizado`);

        res(`passed`);
      });
    });
  } catch (error) {
    return `Erro interno`;
  }
}

exports.find = async (req, res) => {
  try {
    let LIMIT = req.query.limit || 100;
    let PAGE = req.query.page - 1 || 0;
    let PAGES = PAGE * LIMIT;

    let date = new Date();
    date = date.toISOString().split("T")[0];

    db.all(
      `SELECT * FROM users WHERE [info.imported_t] >= (?) LIMIT (?), (?)`,
      date,
      PAGES,
      LIMIT,
      (error, rows) => {
        if (error) return res.status(502).json(`Erro na requisição`);
        if (rows.length == 0)
          return res.status(406).json(`usuário não localizado`);

        let newRows = [];
        for (let key in rows) newRows.push(deepen(rows[key]));

        res.status(200).json(newRows);
      }
    );
  } catch (error) {
    res.status(500).json(`Erro interno`);
  }
};

exports.findOne = async (req, res) => {
  try {
    db.all(
      `SELECT * FROM users WHERE id = (?)`,
      req.params.userId,
      (error, rows) => {
        if (error) return res.status(502).json(`Erro na requisição`);
        if (rows.length == 0)
          return res.status(406).json(`usuário não localizado`);

        res.status(200).json(deepen(rows[0]));
      }
    );
  } catch (error) {
    res.status(500).json(`Erro interno`);
  }
};

exports.update = async (req, res) => {
  try {
    let result = await searchID(req.params.userId);
    if (result != "passed")
      return res.status(406).json(`usuário não localizado`);

    let query = `UPDATE users SET`;
    let values = [];

    let obj = beepen(req.body);

    for (let keys in obj) {
      query += ` [${keys}] = ?, `;
      values.push(req.body[keys]);
    }

    query += `[info.status] = ? WHERE id = ?`;
    values.push(StatusEnum.DRAFT, req.params.userId);

    db.all(query, values, (error, rows) => {
      console.log(error);
      if (error) return res.status(502).json(`Erro na requisição`);

      res.status(201).json(`Update efetuado com sucesso!`);
    });
  } catch (error) {
    res.status(500).json(`Erro interno`);
  }
};

exports.delete = async (req, res) => {
  try {
    let result = await searchID(req.params.userId);
    if (result != "passed")
      return res.status(406).json(`usuário não localizado`);

    db.all(
      `DELETE FROM users WHERE id = ?`,
      req.params.userId,
      (error, rows) => {
        if (error) return res.status(502).json(`Erro na requisição`);

        res.status(201).json(`Deletado com sucesso`);
      }
    );
  } catch (error) {
    res.status(500).json(`Erro interno`);
  }
};
