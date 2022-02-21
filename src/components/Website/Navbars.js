import {React,useState} from "react";
import { Link} from 'react-router-dom';
import {NavThings} from './NavThings';
import Button from "./Button";
import {ServiceStepdown} from './NavThings'
import Stepdown from "./Stepdown";
import { Dropdown } from "bootstrap";

function Navbars(){
    const [dropdown,setDropdown]=useState(false)
   
return(
    <>
    <nav className="navig">
    <Link to="/" className="nav-logo">
        PLANTS
        <i class="fab fa-canadian-maple-leaf"></i>
    </Link>
        <ul className="nav-thing">
        
            {NavThings.map((item)=>{
                if(item.title=="Services"){

                    return(
                        <li key={item.id} className={item.Name}
                        onMouseEnter={()=>setDropdown(true)}
                            onMouseLeave={()=>setDropdown(false)}
                        
                        >
                            <Link to={item.path} 
                            
                            >{item.title}</Link>
                            {dropdown && <Stepdown/>}
                        </li>
                    )
                }
                return(
             <li key={item.id} className={item.Name}>
                 <Link to={item.path}>{item.title}</Link>

             </li>
             )
            })}

        
        </ul>
        <Button/>
    </nav>
  
    </>
);


}
export default Navbars