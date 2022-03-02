const userRouter = require("./users/user.routes");
const reportRouter = require("./reports/reports.routes");

const useRoutes = (app) => {
  app.use("/users", userRouter);
  app.use("/reports", reportRouter);

};

module.exports = useRoutes;
