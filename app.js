var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

const User = require("./models/user");

require("dotenv").config();

mongoose.set("strictQuery", false);

//secret
const MONGO_URI =
  "mongodb+srv://rishawraj0703:ZllsDjgFaUn8HPOZ@local-library-prod.0pq10mq.mongodb.net/local-library-db?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB Connected!");
}

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email });

      // const user = {
      //   _id: { $oid: "6466740c9384e52d60ad7ca4" },
      //   name: "Poetry",
      //   email: "risfggfjgsaj0703@gmail.com",
      //   password: "123",
      //   __v: { $numberInt: "0" },
      // };

      if (!user) {
        return done(null, false, { message: "Incorrect Username" });
      }

      if (user.password !== password) {
        return done(null, false, { message: "Incorrect Password" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await user.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

// routers
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
