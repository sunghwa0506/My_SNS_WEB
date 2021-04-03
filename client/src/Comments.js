import React from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react'

import moment from 'moment'
import {db} from "./fb.js";
import Reply from "./reply.js";

class Add_comment extends React.Component{

  
constructor()
{
    super();
    this.state = 
    {
        hint:"Comments",
        InputComment: "",
        Comment_list:[],
        Time:"",
        user: ""
    }
}

load_comments = () =>
{
  let getComments = [];
  db.collection("comments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let temp = doc.data();
      temp.id = doc.id;
      getComments.push(temp);
    });
    getComments.sort((a,b) =>a.time < b.time ? 1:-1)
    return getComments;
}).then(res =>  
  this.setState({
  Comment_list : res,
  user: this.props.user
}
));
}

update_comments = (reply) =>
{
  db.collection("comments").add({
    content: reply.content,
    time: reply.time,
    writer: reply.writer
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });  
}

componentDidMount = () =>
{
  this.load_comments();
}


AddTolist = (e,a) => {
  let reply = 
  {
    content: e,
    time:a,
    writer:this.props.user
  };
  
    this.setState(prevState => ({
        Comment_list : [...prevState.Comment_list, reply],
        InputComment : "",
        user: this.props.user
      }))  

    
    this.update_comments(reply);
    this.load_comments();
}

    render()
    {
      
      return (
        <Comment.Group>
        <Header as='h3' dividing style = {{color:"white"}}>
          Comments
        </Header>
        <Form reply>
          <Form.TextArea value = {this.state.InputComment} 
                        placeholder ={this.state.hint} 
                        onChange = {(e) => this.setState({InputComment:e.target.value})} />

          <Button content='Add Reply' labelPosition='left' icon='edit' primary 
          onClick = {() => this.AddTolist(this.state.InputComment,moment().format('MMMM Do YYYY, h:mm:ss a'))}/>
        </Form>
        
        {this.state.Comment_list.map((comment)=>
        <Reply comments = {comment} usernmae = {this.state.user} load_comment={this.load_comments}></Reply>)}
        
      </Comment.Group>
      );
    }

   
}

export default Add_comment;
