import React from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import {db} from "./fb.js";


import myImage from './images/avatar/small/ir.jpg'


class reply extends React.Component{


    delete = () =>
    {

        if(this.props.usernmae == this.props.comments.writer )
        {
            db.collection("comments").doc(this.props.comments.id).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            }).then(
                this.props.load_comment()
            )
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
                  <Comment.Action style = {{color:"salmon"}} onClick = {this.delete}>Modify</Comment.Action>
                 </Comment.Actions>
              </Comment.Content>
            </Comment>
            </div>
    
        );
    }
    
}
 
    

export default reply;
