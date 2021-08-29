const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./routers/users");
const updatetime = require("./helpers/schedule");
const path = require("path");
const PORT = 5000;

updatetime();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/users", users);

app.use("/:id", (req, res) => {
  res.status(404).json(`Router ${req.params.id} não localizada`);
});
app.use("/", (req, res) =>
  res.status(200).json("REST Back-end Challenge 20201209 Running")
);

app.listen(PORT, () => console.log(`API Online in PORT ${PORT}`));
