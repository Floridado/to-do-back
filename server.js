const Express = require("express");
require("dotenv").config();

//Middlewares
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const Mongoose = require("mongoose");
//Routes
const { auth } = require("./routes/auth");
const { dash } = require("./routes/dashboard");

//App
const app = Express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Health check
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.use("/auth", auth);
app.use("/dash", dash);

//Server
Mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(process.env.PORT || 3200, console.log("Server is live"));
  })
  .catch((err) => console.log(err));
