const express = require("express"); // express application
// require("dotenv").config(); // use the env variables
const mongoose = require("mongoose");
const path = require("path");
const router = require("./src/routes"); // used to handle routes
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
const PORT = 3000;
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: [
      "https://peaceful-biscotti-be0eb6.netlify.app",
      "https://peaceful-biscotti-be0eb6.netlify.app/login",
      "https://peaceful-biscotti-be0eb6.netlify.app/signup",
      "https://roaring-tulumba-ecc642.netlify.app",
      "https://roaring-tulumba-ecc642.netlify.app/login",
      "https://roaring-tulumba-ecc642.netlify.app/signup",
    ],
  })
);
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }))
app.use(router);
const uri =
  "mongodb+srv://AhmeddEsmat:UTr6KxKWExyMf3Jm@cluster0.rulxadp.mongodb.net/?retryWrites=true&w=majority";
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("MongoDB connection successful");
        app.listen(PORT);
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}
new Database();

// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
//   });

app.get("/", function (req, res) {
  res.send("Mangooooo");
});

app.use((req, res) => {
  res.status(404).send("Error: routes doesn't exist (-_-)");
});
