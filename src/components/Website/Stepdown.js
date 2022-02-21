import {React,useState} from "react";
import{ServiceStepdown}from "./NavThings";
import {Link} from "react-router-dom";
import "./Stepdown.css";

function Stepdown(){
    const [Stepdown,setSetdown]=useState(false)

    let Dropdown=()=>{
        setSetdown(!Stepdown)
    }
return(
   <>
   <ul className={Stepdown?"step-submenu pressed":"step-submenu" } onClick={Dropdown}>
    {ServiceStepdown.map(item=>{
   return(
    <li key={item.id}>
    <Link to={item.path} className={item.Name} onClick={()=>setSetdown(false)}>{item.title}</Link>   
     </li>   
   );

    })}   
   </ul>
   </>
);


}
export default Stepdown