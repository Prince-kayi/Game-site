import React,{useState} from "react";

function Contact(){

    const[modify,setModify]=useState(false);
    const goku=()=>{
        setModify(!modify)
    }
    return(
        <footer>
        <div>
       
{ modify ? (<ul className="kaii">

<li><a href="#"> <i class="fab fa-facebook-f"  aria-hidden="true"></i></a></li>
<li><a href="#"> <i class="fab fa-twitter" aria-hidden="true"></i></a></li>
<li><a href="#"> <i class="fab fa-instagram" aria-hidden="true"></i></a></li>
<li><a href="#"> <i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>

          </ul>
):""
}
        
<button  onClick={goku}className='toop'>Enter</button>
     </div>
     </footer>

        
     
    );
    
    
    }
    export default Contact