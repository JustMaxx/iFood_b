const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(cors({ origin: "http://localhost:8081" }));

db.sequelize.sync();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/auth.routes")(app);
require("./routes/order.routes")(app);
require("./routes/user.routes")(app);
require("./routes/categories.routes")(app);
require("./routes/goods.routes")(app);
require("./routes/subCategory.routes")(app);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
