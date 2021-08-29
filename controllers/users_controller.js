const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

exports.find = async (req, res) => {
  try {
    db.all(`SELECT * FROM users`, (error, rows) => {
      if (error) return res.status(502).json(`Erro na requisição`);
      if (rows.length == 0)
        return res.status(406).json(`usuário não localizado`);

      res.status(200).json(rows);
    });
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

        res.status(200).json(rows[0]);
      }
    );
  } catch (error) {
    res.status(500).json(`Erro interno`);
  }
};
