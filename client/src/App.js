import React, { useState } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Post_list from './component/Home/home.js';
import Navigator from './component/Navigator';
import About from './component/About/about'
import Share_Interview from './component/Share/shareInterview';
import WriteInterviewExperience from './component/Share/write';

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
          <Route exact path = "/about"><About></About></Route>
          <Route exact path = "/interview"><Share_Interview></Share_Interview></Route>
          <Route exact path = "/write"><WriteInterviewExperience></WriteInterviewExperience></Route>
        </Switch>
      </div>
    </Router>
    </div>

  );

}


export default App;
