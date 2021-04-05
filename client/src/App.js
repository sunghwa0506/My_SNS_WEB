import React from 'react';
import {Grid, Header,Menu, Segment,Button} from 'semantic-ui-react';
import {HashRouter, Route,NavLink, Switch} from 'react-router-dom';
import Home from "./home.js";
import LoginButton from "./Login.js"
import firebase from "firebase"
import Post_list from './List.js';



var provider = new firebase.auth.GoogleAuthProvider();
class App extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) =>{
    this.setState({ activeItem: name })
  } 

  

    
  constructor ()
  {
    super();
    this.state =
    {
      user : "Visitor",
      loginStaus: "Login"
    }
  }

  
  google_sign = async() =>
  {

    await firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      this.setState({user:user.displayName});
      console.log(user);
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });


  }


  login =async () => {

   await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user:user.displayName, loginStaus:"Log Out"});

      }
      else
      {
        this.google_sign();
      }
    })
    
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

   }

   logOut = async () =>
   {
    await firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    this.setState(
      {
        user : "Visitor",
        loginStaus: "Login"
      }
    )
   }


    render()
    {

      const { activeItem } = this.state

      

      return (
        <div style={{backgroundColor: "black", color:"white"}}>
          <HashRouter>
           <Grid columns='equal' divided inverted padded style = {{ color:"white",paddingTop: '40px'}}>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
        <Segment inverted>
        <Menu inverted secondary>
          <NavLink to ="/Home"><Menu.Item name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} /></NavLink> 
          <NavLink to ="/Post"><Menu.Item name='Post' active={activeItem === 'Post'} onClick={this.handleItemClick} /></NavLink>
        </Menu>
      </Segment>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          <Header size='huge' >Personal SNS WEB</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          <span>
          <span><LoginButton user = {this.state.user} loginStaus = {this.state.loginStaus} login = {this.login} logOut = {this.logOut}></LoginButton></span>
          </span>
          
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
          
          
          

        <Switch>
          <Route exact path ="/Home"><Post_list/></Route>
          <Route exact path ="/Post"><Home user = {this.state.user}></Home></Route>
        </Switch>

          </HashRouter>
         

          </div>
      );
    }

}

export default App;
