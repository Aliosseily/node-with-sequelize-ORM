require("dotenv").config();

const express = require("express");
const app = express();
const sequelize = require("./db/connect");
app.use(express.json());

const customerRoutes = require("./routes/customer");

app.use("/customer", customerRoutes);

const start = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("connected to database");
      app.listen("9000", () =>
        console.log(`Server is listening on port 9000...`)
      );
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};

start();
