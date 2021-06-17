import React,{useState} from 'react';
import axios from 'axios';

//axios use create http request

function AddStudent() {


   const[name, setName] = useState("");
   const[age, setAge] = useState("");
   const[gender, setGender] = useState("");


   function sendData(e)
   {
     e.preventDefault();
     
     const newStudent = {

        name,
        age,
        gender

     }
    
     axios.post("http://localhost:8070/student/add",newStudent).then(()=>{

         alert("student Added")
         
      
     }).catch((err)=> {
         
        alert(err)


     })

   }

   return(

    



     <div className="container">

        <form onSubmit={sendData}>
        <div className="form-group">
           
            <input type="text" className="form-control" id="name"  placeholder="student name" 
            onChange={(e)=>{

              setName(e.target.value);

            }}/>
           
        </div>
         <br/>
        <div className="form-group">
           
            <input type="text" className="form-control" id="age"  placeholder="student Age"  
             onChange={(e)=>{

                setAge(e.target.value);
  
              }}

            
            />
           
        </div>
        <br/>
        <div className="form-group">
           
            <input type="text" className="form-control" id="gender"  placeholder="student gender"
            
            onChange={(e)=>{

                setGender(e.target.value);
  
              }}
            
            
            
            />
           
        </div>
        <br/>
        <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
            

     </div>



   )



}

export default AddStudent;