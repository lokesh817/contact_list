const express=require('express');
const path=require('path');
const port=8000;
const app=express();

const db=require('./config/mongoose');
const Contact=require('./models/contact');
// const contactList=[
//     {
//         Name:'Contacts',
//         Age:'Age',
//         Phone: 'Phone Number'
//     },
//     {
//         Name:'Lokesh',
//         Age:'18',
//         Phone: "8171316576"
//     },
//     {
//         Name:'Varun',
//         Age:'18',
//         Phone: "7417772644"
//     },
//     {
//         Name:'Abhishek',
//         Age:'20',
//         Phone: "6396959573"
//     }
// ]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    
    Contact.find()
    .then(function(contact){
        return res.render('home',{
            title:"My contact list",
            contact_List:contact    
        });
    })
    .catch(function(err){
        console.log("Error in fetching Contact");
    })
});

app.post('/create-contact/',function(req,res){
    // contactList.push({
    //     Name:req.body.Name,
    //     Age:req.body.Age,
    //     Phone:req.body.Phone
    // })
    Contact.create({
        Name:req.body.Name,
        Age:req.body.Age,
        Phone:req.body.Phone
    });
    return res.redirect('/');
});
app.get('/delete-contact/',function(req,res){
    
    // let Phone=req.query.Phone;
    
    // let contactIndex=contactList.findIndex(contact=>contact.Phone==Phone);
    // if(contactIndex!=-1){
    //     contactList.splice(contactIndex,1);
    // }
    const id=req.query.Id;
    Contact.findByIdAndDelete(id)
    .then(function(){
        console.log('deleted contact');
        return res.redirect('back');
    })
    .catch(function(err){
        console.log('error in deletig a contact');
    })

})
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"Playground",
        myself:"lokesh"
    });
});
app.listen(port,function(err){
    if(err){
        console.log('error',err);
    }
    console.log('express server is running on port',port);
});