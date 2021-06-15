//import express package router
const router = require("express").Router();
//const Student = require("../models/student");
//import student.js 
let Student = require("../models/student");

//pased data to the database
router.route("/add").post((req,res)=>{
    
    //body : url body
    
    const name=req.body.name;
    const age = Number(req.body.age);
    const gender=req.body.gender;

    const newStudent = new Student({

      name,
      age,
      gender

    })

   //passed the values to the database 
   newStudent.save().then(()=>{
         
    res.json("Student Added")

   }).catch((err)=>{
       
    console.log(err);

   })

})

//get the data in the database and show data
router.route("/").get((req,res)=>{

  Student.find().then((students)=>{

    res.json(students)
    //send to the message to the back-end

  }).catch((err)=>{
   
    console.log(err);

  })

 
})

 //async funtion : when we use this SMSystem , many request come to the server in once time. 
 //because we use async function it multitasking.it can hadlle many request in once time.                                
router.route("/update/:id").put(async (req, res)=>{

 let userId = req.params.id;
//params = paramter

 //destructure type
 //java script new feature Destructure
 const {name,age,gender} =req.body;

//java script new feature Destructure

 const updateStudent = {

    name,
    age,
    gender
 }

//findoneandUpdate = without user Id ex: we update databse with email , username
//findByIdAndUpdate = with user id (find the id then update database)


//async function eka promisse ekak ei kiyala balan innawa findByIdAndUpdate kiyana function ekata adalawa.ethkota findByid ekata wadak karanna yamkisi kalayak 
//gatha wenawa ex: mini seconds gank (cloud ekata gihilla adala record eka hoyagena eka update karanna) 
//ehema karanakota tawa request ekak enna puluwanne update ekata adalawa tawa user kenekgen ethkota kalin userge request eka trash wenawane ee wenuwata async await eken karanne
//eka request ekak yawwata passe record eka update karanna kiyala ee welawema anith userge values update karanna kiyala request ekak awata trashe wenne na.
//kalin userge data update karamin innawnm me async function eka update karala iwara unata passe ita adala promise ekak request karanawa ethakota me await eken ara promise
//eka enakn poddak aluth userge request eka radawala tiyagannawa

 const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=> {

  
 //data update unanam status code ekath ekka json format eken msg ekakui update karapu userge data tika 
 res.status(200).send({status: "user updated"})

 }).catch((err) => {


 console.log(err);
 res.status(500).send({status: "Error with Updating Data",error: err.message});

 })
})

// http//localhost:8070/student/delete/gfgcvvdhgdv(userID)
router.route("/delete/:id").delete(async (req,res)=>{

  let userId=req.params.id;

  const deletes = await Student.findByIdAndDelete(userId).then(()=>{

    res.status(200).send({status: "user Deleted"})


  }).catch((err)=>{

    console.log(err.message);
    res.status(500).send({status: "Error with delete user" ,error: err.message});
  }) 
  


})



router.route("/get/:id").get(async (req,res)=>{

  let userId=req.params.id;
  

  // we use findByid becuse we use object id(mongoDB auto generated ID)
  //api object id eka wenuwata email eka hari usename eka hari ee wage mokak hari ekak use karanawanm apita puluwan findone() method eka use karanna 
  const user= await Student.findById(userId).then((student) => {

    res.status(200).send({status: "user fetch" , student})

  }).catch((err) => {
     
    console.log(err.message);
    res.status(500).send({status: "Error with get User" ,error: err.message});
     
  })

})


module.exports = router;

