const indexRouter = require("express").Router();

const authRouter = require("./auth.routes");
const questionRouter = require("./question.routes");
const themeRouter = require("./theme.routes");

indexRouter.use("/auth", authRouter);
indexRouter.use("/themes", themeRouter);
indexRouter.use("/themes/questions", questionRouter)


module.exports = indexRouter;
