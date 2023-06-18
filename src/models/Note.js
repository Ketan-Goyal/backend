// steps:
// 1. Deefine Schema-> Note:id,userid,title,content,dateadded
// 2.create model-><model name>

const mongoose=require('mongoose');

const noteSchema=mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    dateAdded:{
        type:Date,
        default:Date.now
    }
    
});
module.exports=mongoose.model("Note",noteSchema);
