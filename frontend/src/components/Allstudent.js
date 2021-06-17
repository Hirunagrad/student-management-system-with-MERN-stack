import React,{useState,useEffect} from 'react';
import axios from 'axios';


function Allstudent() {


    const [students, setStudents] = useState([]);

    useEffect(() => {
     
       function getStudents() {


         axios.get("http://localhost:8070/student/").then((res)=>{

            const newst=setStudents(res.data);
             console.log(res.data);         

         }).catch((err) => {

            alert(err.message);
         })

       }

       getStudents();
       

    },[])

  
  return(

    

     <div>

<div className="">
          
        
<h1>All students</h1>

          <table class="table">
 <thead>
    <tr>
       <th scope="col">name</th>
       <th scope="col">age</th>
       <th scope="col">gender</th>
      
    </tr>
 </thead>
 <tbody>
    
   
 </tbody>
 </table>
       

             </div>
          





       
       {students.map((student,key) => (

          <div className="">
          
        


                     <table class="table">
            <thead>
               
            </thead>
            <tbody>
               <tr>
                 
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
               </tr>

              
            </tbody>
            </table>
                  

                        </div>
                     
          
       ))

       }
       
        
      
           

     </div>





  )



}

export default Allstudent;