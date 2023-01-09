const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3006;
const sequelize = require("./config/connection");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/User");

app.set('PORT', 3006);
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret:'somesecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.engine("handlebars", hbs({extname: "hbs", defaultlayout: "layout", layoutsDir:__dirname + "./views/layouts"}));
app.set("view engine", "handlebars");

app.use((req,res, next) =>{
    if (req.cookies.user_sid && req.cookies.user){
      res.clearCookie('user_sid');
    }
    next();
});

const hbsContent = {userName: "",loggedin: false,title: "You are not logged in today",body:"The Exchange"};

//middleware function to check for logged-in users
var sessionChecker = (req,res,next) => {
  if (req.session.user && req.cookies.user_sid) {
      res.redirect("homepage");
} else {
   next();
  }
};

//route for Homepage

//route for signup page

//route for user log in

//
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
});
