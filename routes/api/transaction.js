const router = require("express").Router();
const transController = require("../../controllers/transController");

// Matches with "/api/transaction"
router.route("/")
  .get(transController.findAll)
  .post(transController.create);

// Matches with "/api/transcation/:id"
router
  .route("/:_id")
  .delete(transController.remove);

// Matches with "/api/transcation/bulk"
router
  .route("/bulk")
  .post(transController.insert)
  .delete(transController.remove);


  

module.exports = router;