const Express = require("express");
require("dotenv").config();
const Mongoose = require("mongoose");

//Middlewares
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Routes
const { auth } = require("./routes/auth");
const { dash } = require("./routes/dashboard");
const { todo } = require("./routes/todos");

//App
const app = Express();

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Health check
app.get("/", (req, res) => {
  res.sendStatus(200);
});

//Routing
app.use("/auth", auth);
app.use("/dash", dash);
app.use("/todo", todo);

//Server
Mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(process.env.PORT || 3200, console.log("Server is live"));
  })
  .catch((err) => console.log(err));
