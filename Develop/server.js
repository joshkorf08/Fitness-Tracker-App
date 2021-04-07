const express = require("express");

const mongoose = require("mongoose");

const db = require("./models");

const apiRoutes = require(".routes/api");

const htmlRoutes = require("./routes/html");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    
    useNewUrlParser: true 
});

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});