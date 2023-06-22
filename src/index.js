const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();


const Note = require("./models/Note");
const mongoose = require("mongoose");

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).then(function ()
{
  app.get("/", function (req, res) {
    res.send("API WORKS");
  });
  const noteRouter=require("./routes/notes");
  app.use("/notes",noteRouter);

  const PortNo=process.env.PORT;
  app.listen(PortNo, function () {
    console.log("listening to port no " + `${PortNo}`);
    });
});

