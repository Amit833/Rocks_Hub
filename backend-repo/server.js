require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

const usersRouter = require("./routes/usersRouter");
const authRouter = require("./routes/authRouter");

// connect to MongoDB. For now I just use my database. Later on we can change it
require("./helpers/db-connection");

app.listen(port, () => {
  console.log(`finrocks hub listening port http://localhost:${port}`);
});

/**EXPRESS MIDDLEWARE */
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:3000",
    credentials: true, // allow cookies from origins
  })
);

/**ROUTES */
app.use("/users", usersRouter);
app.use("/login", authRouter);

// Error Handling
app.use(function errorHandler(err, req, res, next) {
  console.log("centralerr", err);
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
