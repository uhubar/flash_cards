require("dotenv").config();
const express = require("express");

const app = express();
const indexRouter = require("./routes/index.routes");
const serverConfig = require("./config/serverConfig");

serverConfig(app);
app.use("/api", indexRouter);

const { Post } = require("./db/models");

app.get("/", async (req, res) => {
  const posts = await Post.findAll({
    include: ["PostCategory", "User"],
  });
  res.json({ posts });
});

app.listen(process.env.PORT, () => {
  console.log(`Лисички танцуют на  ${process.env.PORT} порту!! `);
});
