import react,{useState} from 'react'

function SideFoot(){
   
return(
    

<div className="foot-wrap">

       <ul className='rio'>
    <li><button className='feit'>All</button></li> 
    <li><button className='feet'>Popular</button></li> 
    <li><button className='feet'>News</button></li> 
</ul>
    

<input className='yt'
type="text"
id="header-search"
placeholder='search Game'
name='s'/>

<button type="submit" className='op'>Search</button>



</div>

);
}
export default SideFoot;