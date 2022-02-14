import React from "react";
import { Link } from "react-router-dom";

function Sign(){
return(
    <div className="sign">

    <h1 className="lip"> Login</h1>
        <div className="form">
            
            <input type="text" name="username" placeholder="username" required />
      </div>  
      <div className="form">
            
            <input type="password" name="password" placeholder="password" required />
      </div>
      <div  className="press">
      <button className="log">Login</button>
      <p className="option">Not yet registered?<Link to="/register" className="top"> Create an account!</Link></p>
      </div>
    </div>
);


}
export default Sign