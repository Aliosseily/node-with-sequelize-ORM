const sequelize = require("../db/connect");

const Customer = require("../models/Customer");
const Order = require("../models/Order");

Customer.hasMany(Order);

sequelize
  // .sync()
  .sync({ force: true })
  .then((result) => {
    console.log(result);
     return Customer.create({ name: "Ali", email: "ali@gmail.com" });
  })
  .catch((err) => {
    console.log(err);
  });
