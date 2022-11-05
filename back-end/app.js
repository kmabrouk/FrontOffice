let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
require("./conn");
const cors=require("cors");

let procedureRoutes = require("./routes/procedures");
let demandeRoutes = require("./routes/demandes");
let citoyenRoutes = require("./routes/citoyens");

let indexRouter = require("./routes/index");

let app1 = express();
app1.disable("x-powered-by");

let helmet = require("helmet");
let app = express();
app.use(helmet.hidePoweredBy());
// app.use(cors());
app.use(express.json()); // to accept json data

app.use("/procedures", procedureRoutes);
app.use("/demandes", demandeRoutes);
app.use("/citoyens", citoyenRoutes);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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
