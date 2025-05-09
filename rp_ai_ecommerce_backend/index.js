const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running ");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connnect to DB");
    console.log("Server is running " + PORT);
  });
});
