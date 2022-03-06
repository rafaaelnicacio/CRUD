require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes/ItemsCommand.routes");
const app = express();
const connectToDatabase = require("./config/database");

connectToDatabase();
app.use(express.json());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3000, () => {
  console.log("3000");
});
