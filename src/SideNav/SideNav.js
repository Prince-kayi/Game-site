import react,{useState} from 'react'
import {Link} from 'react-router-dom'

function SideNav(){
   
return(

<div className="side-wrap">
<div className='side'>
    <ul className='thing'>
        <li className='less'><Link to="/home" ><i class="fas fa-home"></i><p className='help'>Home</p> </Link></li>
        <li className='less'><Link to="/dash" > <i class="fas fa-home"></i><p className='help'>Leadborad</p></Link></li>
        <li className='less'><Link to="/sale" ><i class="fas fa-home"></i><p className='help'>On Sale</p> </Link></li>
        <li className='less'><Link to="/console"> <i class="fas fa-home"></i><p className='help'>console</p></Link></li>
        <li className='less'><Link to="/sign"><i class="fas fa-home"></i><p className='help'>Sign Up</p> </Link></li>
        <button className='bts'>Book Now</button>
    </ul>

    

</div>

 
</div>
);
}
export default SideNav;