require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

const usersRouter = require("./routes/usersRouter");
const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");
const educationRouter = require("./routes/educationRouter");
const employmentRouter = require("./routes/employmentRouter");

// connect to MongoDB. For now I just use my database. Later on we can change it
require("./helpers/db-connection");

app.listen(port, () => {
  console.log(`finrocks hub listening port http://localhost:${port}`);
});

/**EXPRESS MIDDLEWARE */
app.use(express.json());
app.use("/statics", express.static("statics")); // share files in statics folder on route /statics
app.use(
  cors({
    // origin: "http://localhost:3000",
    credentials: true, // allow cookies from origins
  })
);

/**ROUTES */
app.use("/users", usersRouter);
app.use("/login", authRouter);
app.use("/profile", profileRouter);
app.use("/education", educationRouter);
app.use("/employment", employmentRouter);

// Error Handling
app.use(function errorHandler(err, req, res, next) {
  console.log("centralerr", err);
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
