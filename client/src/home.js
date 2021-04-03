import React from 'react';
import {Image, Divider, Header, Icon, Grid,Button,Menu, Segment } from 'semantic-ui-react'
import Comments from './Comments.js'
import Buttons from './buttons.js'
import myImage from './ir.jpg';
import ModalScrollingExample from './Visitor.js';
import firebase from "firebase"
import auth from "./fb.js";




var provider = new firebase.auth.GoogleAuthProvider();




class Home extends React.Component {

  constructor()
  {
    super();
    this.state = 
    {
      user:"Visitor",
      isopen : false,
      visitor:["test1","test2","test3"],
      like:0
    }
  }

  componentDidMount = () =>
  {
    
  }


  google_sign = () =>
  {

    firebase.auth()
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


  login = () => {

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user:user.displayName});
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

  
    



  toggleModle = () =>
  {
    this.setState(prev => {
      return {isopen: !prev.isopen}
    })

    console.log(this.state.isopen)
  }
    
    render()
    {

      return (
        <div style={{backgroundColor: "black", color:"white"}}>

        <Image src={myImage} size='medium' rounded centered style={{marginTop:'10%'}}/>
        <br/>
        <Grid centered > 
          <Grid.Row>
          <Buttons toggle = {this.toggleModle} visitor = {this.state.visitor.length}></Buttons>
          <ModalScrollingExample open = {this.state.isopen} close = {this.toggleModle} username = {this.state.user} visitor = {this.state.visitor}/>
          </Grid.Row>
          
          <Grid.Row style = {{color:"white"}}>
          
          <Divider horizontal >
        <Header as='h5' style = {{color:"white"}}>
        <div style = {{color:"white"}}> 
        <Icon name='comment alternate'  style = {{color:"white"}} />
        Please comment</div>
      </Header>
      </Divider>
          
          </Grid.Row>


       </Grid>
    <Grid.Row>
      <Grid centered columns = {3}>
        <Grid.Column > <Comments key = {this.state.user} user = {this.state.user}/></Grid.Column>
   
    </Grid>
    </Grid.Row>

      </div>
      );
    }

}
export default Home;