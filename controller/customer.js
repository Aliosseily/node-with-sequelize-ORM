const Customer = require("../models/Customer");

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      attributes: ["id", ["name", "Customer_name"], "email"],
    });
    return res.status(201).send({ success: true, data: customers });
  } catch (err) {
    return res.status(500).send({ success: false, err });
  }
};

const getCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const isCustomerExists = await Customer.findOne({ where: { id: id } });
    if (!isCustomerExists) {
      return res.status(404).send({ message: "Customer not found!" });
    }
    const customer = await Customer.findAll({
      attributes: ["id", ["name", "Customer_name"], "email"],
      where: { id: id },
    });
    return res.status(201).send({ success: true, data: customer });
  } catch (err) {
    return res.status(500).send({ success: false, err });
  }
};

const addCustomer = async (req, res) => {
  const { body } = req;
  try {
    const customer = await Customer.create(body);
    return res.status(201).send({ success: true, data: customer });
  } catch (err) {
    return res.status(500).send({ success: false, err });
  }
};

const updateCustomer = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    const isCustomerExists = await Customer.findOne({ where: { id: id } });
    if (!isCustomerExists) {
      return res.status(404).send({ message: "Customer not found!" });
    }
    const customer = await Customer.update(body, { where: { id: id } });
    return res.status(201).send({ success: true, data: customer });
  } catch (err) {
    return res.status(500).send({ success: false, err });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const isCustomerExists = await Customer.findOne({ where: { id: id } });
    if (!isCustomerExists) {
      return res.status(404).send({ message: "Customer not found!" });
    }
    const customer = await Customer.destroy({ where: { id: id } });
    return res.status(201).send({ success: true, data: customer });
  } catch (err) {
    return res.status(500).send({ success: false, err });
  }
};

module.exports = {
  getAllCustomers,
  getCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
