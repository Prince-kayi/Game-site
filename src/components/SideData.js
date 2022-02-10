import react from 'react'
import {Link} from 'react-router-dom'
import{useState} from 'react'


function SideData(){
    const[Click,setClick]=useState(false)
    let handle=()=>{
        setClick(!Click);
    }

    return(
 <nav>
    <div className='nav-cont'>
        <ul className='items'>
         <li className='link'><Link to="/" className='li'>Home</Link></li>
         <li className='link'><a href="/dash" className='li'>Dashboard</a></li>
         <li className='link'><Link to="/sale" className='li'>On Sale</Link></li>
         <li className='link'><Link to="/access"className='li'>Console and Accessories</Link></li>
         <li className='link'><Link to="/sign" className='li'>Sign In</Link></li>
<button className='ton' onclick={handle}>Book Now</button>
        </ul>

    </div>
</nav>



    );
}
export default SideData;
    