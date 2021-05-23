import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';

const App = () => {
   return( 
     <div className="page">
       <BrowserRouter>
       <Switch>
         <Route to="/">
            <Home />
         </Route>
         <Route to="/products">
            <Products />
         </Route>
         <Route>
            <Contact />
         </Route>
       </Switch>   
       </BrowserRouter>
     </div>
   )
}
export default App;