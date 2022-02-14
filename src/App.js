import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import SideFoot from './SideNav/SideFoot';
import './SideNav/SideNav.css'
import './SideNav/SideFoot.css'
import Contact from './Hero/Contact';
import Footer from   './Hero/Footer'
import NavSide from './Navigation/NavSide';
import './Navigation/NavSide.css';
import Home from'./Pages/Home';
import Products from './Pages/Products';
import Reports from './Pages/Reports';
import Console from './Pages/Console';
import Sign from './Pages/Sign';
import './App.css'
import Join from './Pages/Join';


 function App(){


return(

<div className='App'>
 
 <Router>
 <NavSide />


 <Switch>
   <Route path="/"  exact component={Home}/>
 <Route path="/products"  component={Products}/>
 <Route path="/reports" component={Reports}/>
 <Route path="/console" component={Console}/>
 <Route path="/sign" component={Sign}/>
 <Route path="/register" component={Join}/>





 </Switch>

   
   </Router> 

</div>
  
  );
}

export default App;
