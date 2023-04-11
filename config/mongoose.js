//require Library
const mongoose=require('mongoose');

//mongoose connection to database
mongoose.connect('mongodb://127.0.0.1:27017/contacts_list_db');

//acquire connection to check if it working
const db=mongoose.connection;

// checking for error
db.on('error',console.error.bind(console,'Connection Error'));

//checking for successfull connection
db.once('open',function(){
    console.log('Database connected Succesfully');
});