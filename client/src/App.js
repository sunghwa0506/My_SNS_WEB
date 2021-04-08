import React, { useState } from 'react';

import {BrowserRouter as Router, Route,NavLink, Switch} from 'react-router-dom';
import LoginButton from "./component/Login.js"
import firebase from "firebase"
import Post_list from './component/List.js';
import Navigator from './component/Navigator';

function App ()
{

  const [activeItem, setActiveItem] = useState("home");
  const [user, setUser] = useState("Visitor")
  return (
    
    <div >
        <Router>
      <Navigator></Navigator>
      <div>
        <Switch>
          <Route exact path = "/"><Post_list user ={user}/></Route>
        </Switch>
      </div>
    </Router>
    </div>

  );

}


export default App;
