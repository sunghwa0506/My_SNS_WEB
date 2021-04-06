
import React from "react";
import {Button} from 'semantic-ui-react';



class Login extends React.Component{



    render()
    {

        let loginButton;
      if(this.props.loginStaus == "Login")
      {
        loginButton = 
        <Button primary onClick = {this.props.login}>{this.props.loginStaus}</Button>
      }
      else{
        loginButton = 
        <Button primary onClick = {this.props.logOut}>{this.props.loginStaus}</Button>
      }

        return(
            <span>
            <span style ={{color: "Cyan", paddingRight:5}}>Hello </span> 
            <span style ={{ paddingRight:5}}> {this.props.user} !! </span>
            <span>{loginButton}</span>     
            </span>

            
        );
    }

}

export default Login