import React from "react";


function Join(){
return(
    <div className="register">
          <h1 className="lip">REGISTER</h1>
        <div className="formi">
            
            <input type="text" name="username" placeholder="username" required />
      </div>  
      <div className="formi">
            
            <input type="email" name="email" placeholder="Eamil" required />
      </div>
      <div className="formi">
            
            <input type="password" name="password" placeholder="password" required />
      </div>
      <div className="formi">
            
            <input type="password" name="Confirm password" placeholder="Confirm password" required />
      </div>
      <div>
      <button className="sub">Submit</button>
      
      </div>
    </div>
);


}
export default Join