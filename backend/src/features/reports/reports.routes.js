const { Router } = require("express");
const router = Router();
const reportsCtrl = require("./reports.controller");

router.get("/", reportsCtrl.testPath);
router.post("/transfer", reportsCtrl.transfer);
router.get("/getReport/:NoAccount", reportsCtrl.getReports); // 4

module.exports = router;
