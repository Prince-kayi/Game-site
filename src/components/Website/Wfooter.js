import React from "react";
import {Link}from "react-router-dom"

function Wfooter(){
return(
    <div className="footerr">
     <div className="lwrap">

        <div className="links">
            <h2>About us</h2>
   <Link to="/">How it works</Link>
   <Link to="/">Testimonals</Link>
   <Link to="/">Careers</Link>
   <Link to="/">Investors</Link>
   <Link to="/">Terms of Service</Link>
        </div>
        <div className="links">
            <h2>Contact Us</h2>
   <Link to="/">Contact</Link>
   <Link to="/">Support</Link>
   <Link to="/">Destination</Link>
   <Link to="/">Sponsorships</Link>
  
        </div>
        <div className="links">
            <h2>Videos</h2>
   <Link to="/">Submit Video</Link>
   <Link to="/">Types of Videos</Link>
   <Link to="/">Genre</Link>
   <Link to="/">Agency</Link>
   <Link to="/">Influncer</Link>
        </div>
        <div className="links">
            <h2>Social Media</h2>
   <Link to="/">facebook</Link>
   <Link to="/">Twitter</Link>
   <Link to="/">instagram</Link>
   <Link to="/">linkedin</Link>
   <Link to="/">YouTube</Link>
       </div>
        </div>
   
        <div className="media">
        
        <div className="foots">
<Link to="/" >
        PLANTS
        <i class="fab fa-canadian-maple-leaf"></i>
    </Link>
</div>

<ul className="foot2">
<li className='lee'><Link to="#"><i class="fab fa-facebook-f"  aria-hidden="true"></i></Link></li>
<li className='lee'><Link to="#"><i class="fab fa-twitter" aria-hidden="true"></i></Link></li>
<li className='lee'><Link to="#"><i class="fab fa-instagram" aria-hidden="true"></i></Link></li>
<li className='lee'><Link to="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></Link></li>

        </ul>

    
     </div>
     </div>
    
);


}
export default Wfooter