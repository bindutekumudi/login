import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";
// import Success from "RegSucc";
// class App extends Component{
//     constructor(){
//         super()
//         this.state={
//            userName:"",
//            email:"",
//            password:"" 
//         }
//         this.changeUserName=this.changeUserName.bind(this)
//         this.changeEmail=this.changeEmail.bind(this)
//         this.changePassword=this.changePassword.bind(this)
        
//     }
//     changeUserName(event){
//         this.setState({
//             userName:event.target.value
//         })
//     }
//     changeEmail(event){
//         this.setState({
//             email:event.target.value
//         })
//     }
//     changePassword(event){
//         this.setState({
//             password:event.target.value
//         })
//     }
//     onSubmit(event){
//         event.preventDefault()
//         const registeredUserDetails={
//           userName:this.state.userName,
//           email:this.state.email,
//           password:this.state.password 
//         }
//     }
       

    // render()
    // {
        function App(){
            return(
                <div className="jumbotron centered">
                  <div className="container">
                  <i class="fas fa-key fa-6x"></i>
                    <div className="form-div">
                        {/* <form action="/" method="POST">
                        <input type="submit"   className="btn btn-secondary btn-block form-group" value="Login Page"/>
    
                          <input type="text"  
                          placeholder="userName"
                        //   onChange={this.changeUserName}
                        //   value={this.state.userName}
                         className="form-control form-group"
                          />
                           <input type="text"  
                          placeholder="email"
                        //   onChange={this.changeEmail}
                        //   value={this.state.email}
                         className="form-control form-group"
                          />
                           <input type="text"  
                          placeholder="password"
                        //   onChange={this.changePassword}
                        //   value={this.state.password}
                         className="form-control form-group"
                          />
                          <input type="submit"   className="btn btn-secondary btn-block" value="Submit"/>
                          <a class="btn btn-dark btn-lg" href="" role="button">Login</a>
                          <a class="btn btn-dark btn-lg" href="" role="button">Login</a>

                         </form> */}
                        <Login/>
                    </div>
                 </div>
               </div>
            );
        }
    
        
       
export default App;