import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Navbars from './Components/Website/Navbars';
import Button from './Components/Website/Button';
import './Components/Website/Navbars.css'
import  './Components/Website/Button.css'
import Wfooter from './Components/Website/Wfooter';




 function App(){


return(

<div className='Appi'>
 
 <Router>
 <Navbars/>

<Wfooter/>

 <Switch>
   


 </Switch>

   
   </Router> 

</div>
  
  );
}

export default App;
