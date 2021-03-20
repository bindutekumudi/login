import React, { Component } from 'react';
// import Input from "./components/userinput.js";
export default class CreateUsers extends Component {
    render(){
        return(
            <div>
            {/* <p>You are on the  Create  users list components</p>
            <Input/> */}
            <div className="container mt-5">
            <h1>Login</h1>
            <div className="row">
            <div className="col-lg-8">
            <div className="card">
                    <div className="card-body">
                       <form action="/login" method="POST">
                       <div className="form-group">
                               <label for="userName">Enter UserName</label>
                               <input type="name" class="form-control" name="userName"/>
                           </div>
                           <div className="form-group">
                               <label for="email">Enter your Email</label>
                               <input type="email" class="form-control" name="userName"/>
                           </div>
                           
                           <div className="form-group">
                               <label for="password">password</label>
                               <input type="password" class="form-control" name="userName"/>
                           </div>
                           <div className="col-lg-4">

                           <button type="submit" class="btn btn-dark btn-lg  btn-outline-secondary ">Login</button>
                           <button type="submit"   class="btn btn-dark btn-lg btn-outline-secondary">Register</button>
                        </div>
                       </form> 
                    </div>
                </div>
            </div>
            </div>
                
        </div>
            </div>
        )
    }
}
/*import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
} */