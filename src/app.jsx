import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

/*import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";
         function App(){
            return(
              //   <div className="jumbotron centered">
              //     <div className="container">
              //     <i class="fas fa-key fa-6x"></i>
              //       <div className="form-div">
                       
              //           <Login/>
              //       </div>
              //    </div>
              //  </div>
              <div className="container">
                     hello
              </div>
            );
        }
    
        
       
export default App; */