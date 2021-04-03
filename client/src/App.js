import React from 'react';
import {Header,Menu, Segment} from 'semantic-ui-react';
import {HashRouter, Route,NavLink, Switch} from 'react-router-dom';
import Home from "./home.js";

class App extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) =>{
    this.setState({ activeItem: name })
  } 




    render()
    {

      const { activeItem } = this.state

      return (
        <div style={{backgroundColor: "black", color:"white"}}>
          <Header size='huge' style = {{textAlign: 'center', color:"white",paddingTop: '40px'}}>Personal SNS WEB</Header>
          <HashRouter>
          <Segment inverted>
        <Menu inverted secondary>
          <NavLink to ="/Home"><Menu.Item name="Home" active={activeItem === 'Home'}
          onClick={this.handleItemClick} /></NavLink>
            
            <NavLink to ="/message"><Menu.Item
            name='messages'
            active={activeItem === 'messages'}
          onClick={this.handleItemClick}
          /></NavLink>
        </Menu>
      </Segment>

        <Switch>
          <Route exact path ="/home"><Home></Home></Route>
        </Switch>

          </HashRouter>
         

          </div>
      );
    }

}

export default App;
