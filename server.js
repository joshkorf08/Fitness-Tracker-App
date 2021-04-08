const express = require("express");

const logger = require("morgan");

const mongoose = require("mongoose");

const db = require("./models");

const path = require("path");

const apiRoutes = require("./routes/apiRoutes");

const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

require("dotenv").config()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
console.log(`"mongodb+srv://joshuakorf:${process.env.PASSWORD}@cluster0.pabj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"`)
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://joshuakorf:${process.env.PASSWORD}@cluster0.pabj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { 
  
    useNewUrlParser: true, 
    useFindAndModify: false
});

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});