import React from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import {db} from "./fb.js";


import myImage from './images/avatar/small/ir.jpg'


class reply extends React.Component{


    delete = () =>
    {

        if(this.props.usernmae == this.props.comments.writer )
        {
            
            this.props.load_comments(this.props.comments.id)
        }
        else
        {
            alert("No permission");
        }
    }

    render(){

        return(
            <div >
            <br/>
            <Comment>
              <Comment.Avatar src={myImage} />
              <Comment.Content>
                <Comment.Author as='a' style = {{color:"Cyan"}} >{this.props.comments.writer}</Comment.Author>
                <Comment.Metadata>
                  <div style = {{color:"white"}} >{this.props.comments.time}</div>
                </Comment.Metadata>
                <Comment.Text  style = {{color:"white"}}>{this.props.comments.content}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action style = {{color:"salmon"}} onClick = {this.delete}>Delete</Comment.Action>
                 </Comment.Actions>
              </Comment.Content>
            </Comment>
            </div>
    
        );
    }
    
}
 
    

export default reply;
