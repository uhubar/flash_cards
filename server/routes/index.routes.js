const indexRouter = require("express").Router();

const categoryRouter = require("./postCategories.routes");
const authRouter = require("./auth.routes");

indexRouter.use("/categories", categoryRouter);
indexRouter.use("/auth", authRouter);

module.exports = indexRouter;
