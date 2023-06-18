const express = require("express");
const app = express();

const Note = require("./models/Note");
const mongoose = require("mongoose");

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://KetanGoyal:Ketan%404102@cluster0.hyuiwze.mongodb.net/myappdb").then(function ()
{
  app.get("/", function (req, res) {
    res.send("API WORKS");
  });
  const noteRouter=require("./routes/notes");
  app.use("/notes",noteRouter);
  });
const PortNo=process.env.PORT||3000;
app.listen(PortNo, function () {
  console.log("started local host at port no " + `${PortNo}`);
});
