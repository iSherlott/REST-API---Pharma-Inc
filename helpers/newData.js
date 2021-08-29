const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const requestData = require("./requestData");
const StatusEnum = require("./StatusEnum");

exports.newData = async () => {
  try {
    for (let i = 0; i < 20; i++) {
      let data = await requestData(i);

      for (let register of data.results) {
        let insert = db.prepare(
          `INSERT INTO users (
                gender, 
                [name.title], 
                [name.first], 
                [name.last], 
                [location.street.number], 
                [location.street.name], 
                [location.city], 
                [location.state], 
                [location.country], 
                [location.postcode], 
                [location.coordinates.latitude], 
                [location.coordinates.longitude], 
                [location.timezone.offset], 
                [location.timezone.description], 
                email, 
                [login.uuid], 
                [login.username], 
                [login.password], 
                [login.salt], 
                [login.md5], 
                [login.sha1], 
                [login.sha256], 
                [dob.date], 
                [dob.age], 
                [registered.date], 
                [registered.age], 
                phone, 
                cell, 
                [id.name], 
                [id.value], 
                [picture.large], 
                [picture.medium], 
                [picture.thumbnail], 
                nat, 
                [info.seed], 
                [info.version],
                [info.status]
                )
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
          register.gender,
          register.name.title,
          register.name.first,
          register.name.last,
          register.location.street.number,
          register.location.street.name,
          register.location.city,
          register.location.state,
          register.location.country,
          register.location.postcode,
          register.location.coordinates.latitude,
          register.location.coordinates.longitude,
          register.location.timezone.offset,
          register.location.timezone.description,
          register.email,
          register.login.uuid,
          register.login.username,
          register.login.password,
          register.login.salt,
          register.login.md5,
          register.login.sha1,
          register.login.sha256,
          register.dob.date.replace("T", " ").replace("Z", ""),
          register.dob.age,
          register.registered.date.replace("T", " ").replace("Z", ""),
          register.registered.age,
          register.phone,
          register.cell,
          register.id.name,
          register.id.value,
          register.picture.large,
          register.picture.medium,
          register.picture.thumbnail,
          register.nat,
          data.info.seed,
          data.info.version,
          StatusEnum.PUBLISHED
        );
        await insert.run();
        await insert.finalize();
      }
    }

    let insertStatus = db.prepare(
      `INSERT INTO log (occurrence) VALUES (?)`,
      "Update database"
    );
    await insertStatus.run();
    await insertStatus.finalize();
  } catch (error) {
    let insertError = db.prepare(
      `INSERT INTO log (occurrence) VALUES (?)`,
      error
    );
    await insertError.run();
    await insertError.finalize();
  }
};
