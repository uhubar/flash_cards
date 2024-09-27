require("dotenv").config();
const express = require("express");

const app = express();
const indexRouter = require("./routes/index.routes");
const serverConfig = require("./config/serverConfig");

serverConfig(app);
app.use("/api", indexRouter);

const { Question } = require("./db/models");

app.get("/", async (req, res) => {
  const questions = await Question.findAll({
    include: ["Theme"],
  });
  res.json({ questions });
});

app.listen(process.env.PORT, () => {
  console.log(`Лисички танцуют на  ${process.env.PORT} порту!! `);
});
