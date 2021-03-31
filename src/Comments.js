import React from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react'

import myImage from './images/avatar/small/ir.jpg'
import moment from 'moment'


function AddComment(params) {
    return(
        <div >
        <Comment>
          <Comment.Avatar src={myImage} />
          <Comment.Content>
            <Comment.Author as='a' style = {{color:"white"}} >{params.username}</Comment.Author>
            <Comment.Metadata>
              <div style = {{color:"white"}} >{params.time}</div>
            </Comment.Metadata>
            <Comment.Text  style = {{color:"white"}}>{params.content}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
        </div>

    );
    
}





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


AddTolist = (e,a) => {
  console.log(a)
    this.setState(prevState => ({
        Comment_list : [...prevState.Comment_list, e],
        InputComment : "",
        Time: a,
        user:this.props.username
      }))  


}




    render()
    {
        console.log(this.state.Comment_list);

      return (



        <Comment.Group>
        <Header as='h3' dividing style = {{color:"white"}}>
          Comments
        </Header>

        {this.state.Comment_list.map(comments => <AddComment content = {comments} time = {this.state.Time} username = {this.state.user}></AddComment>)}
        <Form reply>
          <Form.TextArea value = {this.state.InputComment} 
                        placeholder ={this.state.hint} 
                        onChange = {(e) => this.setState({InputComment:e.target.value})} />

          <Button content='Add Reply' labelPosition='left' icon='edit' primary 
          onClick = {() => this.AddTolist(this.state.InputComment,moment().calendar())}/>
        </Form>
      </Comment.Group>
      );
    }

   
}

export default Add_comment;
