const mongoose= require('mongoose');
const contactSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number
    },
    Phone:{
        type:Number,
        required:true
    }
});
const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;