const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
require("./models");
app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, 'public'))); // setting /public to be a static location

app.get("/", (req, res) => {
  res.render("homepage");
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
});
