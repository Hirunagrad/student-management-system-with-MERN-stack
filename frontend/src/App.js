import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import Allstudent from './components/Allstudent';
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (

    <Router>
    <div className="App">
      <Header/>
      <br/><br/>
      <Route path="/" exact component={Allstudent}/>
      <Route path="/add" exact component={AddStudent}/>
      
       
      
    </div>

    </Router>
  );
}

export default App;
