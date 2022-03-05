const express = require("express");
const {
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  getAllCustomers,
} = require("../controller/customer");

const router = express.Router();

router.route("/all").get(getAllCustomers);
router.route("/add").post(addCustomer);
router
  .route("/:id")
  .get(getCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;
