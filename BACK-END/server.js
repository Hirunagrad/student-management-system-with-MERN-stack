
// get all backend dependencies to server js

const express = require("express");
const mongoose=require("mongoose");
const bodyParser =require("body-parser");
const cors =require("cors");
const app = express();
require("dotenv").config();

//define the port
//process.env.PORT =  run the code any port available

const PORT  = process.env.PORT || 8070;

//use cors and bodyparser

app.use(cors());
app.use(bodyParser.json());

//conect the url in .env file

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

   useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology : true,
   useFindAndModify : false
    

});


//create connection

const connection = mongoose.connection;

//open=connection open
connection.once('open', () => {

  console.log("MongoDB connection Sucsess!");

})

// acess students.js in route
const studentRouter = require("./routes/students.js");
//data load front end to back end
app.use("/student",studentRouter);


//all are ready listen the port
app.listen(PORT, () => {

  console.log(`Server up and running on port number: ${PORT}`);

})
