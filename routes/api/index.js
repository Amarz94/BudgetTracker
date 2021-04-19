const router = require("express").Router();
const transRoutes = require("./transaction");


router.use("/transaction", transRoutes);

module.exports = router;