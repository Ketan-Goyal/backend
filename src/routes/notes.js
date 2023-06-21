const express =require('express');
const router=express.Router();
const Note=require('./../models/Note');



router.get("/list/", async function (req, res) {
  var notes = await Note.find({ userid: req.body.userid });
  res.json(notes);
});
router.post("/add", async function (req, res) {
  await Note.deleteOne({ id: req.body.id }); //to make update work

  var newNote = new Note({
    id: req.body.id,
    userid: req.body.userid,
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();
  var response = { message: "new note created " + `with id ${newNote.id}` };
  res.json(response);
});
router.post("/delete", async function (req, res) {
  await Note.deleteOne({ id: req.body.id });
  var response = { message: "note deletd successfully " + `id: ${req.body.id}` };
  res.json(response);
});
module.exports=router;