import React, { Component } from 'react';
function Input(){
         return(
            <div>
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

                           <button type="submit" class="btn btn-dark btn-lg">Login</button>
                           <button type="submit"   class="btn btn-dark btn-lg">Register</button>
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

export default Input;
