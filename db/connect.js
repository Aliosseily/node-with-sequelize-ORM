const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "test",
  `${process.env.DATABASE_USERNAME}`,
  `${process.env.DATABASE_PASSWORD}`,
  {
    dialect: "mysql", // this is optional to till sequelize tha we are going to talk with mysql database
    host: "localhost",
  }
);

module.exports = sequelize;
