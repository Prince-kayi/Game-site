import react,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Data} from './Data'


function NavSide(){
   const [sideBar,setsideBar]=useState(false)
   let showBar=()=>{
       setsideBar(!sideBar)
   }
return(
  <>  

<div className="navbar">
        <Link to="#" className='menu-bars'><i class="fas fa-bars" onClick={showBar}></i></Link>
</div>
<nav className={sideBar ?"nav-menu active" : "nav-menu"}>
    <ul className='nav-menu-items'onClick={showBar}>
        <li className='toggle'> 
        <Link to="#" className='menu-bars'><i class="fas fa-times"></i> </Link>
        </li>
   {Data.map((item,index)=>{
       return(
           <li key={index} className={item.cName}>
           <Link to={item.path}>{item.icon} <span>{item.title}</span></Link>
           </li>
       )
   })}

    </ul>


</nav>

</>

);
}
export default NavSide;