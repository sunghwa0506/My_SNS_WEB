import React, { useState } from 'react';
import {Comment,Icon} from 'semantic-ui-react'






const Reply = (comments, usernmae, load_comments) => {

  const [avatar, setAvatar] = useState("user outline");


  function Delete ()
  {
    console.log("here")
    if (usernmae == comments.comments.writer )
    {
        
      load_comments(comments.comments.id);
    }
    else
    {
        alert("No permission");
    }

    
  }  

  console.log(usernmae.toString())


    return(
            <div >
            <br/>
            <Comment style={{color:"white"}}>
              
             
              <Comment.Content>
                <span>
                <Icon name = {avatar}></Icon>
                <Comment.Author as='a' style = {{color:"Cyan"}} >{comments.comments.writer}</Comment.Author>
                </span>
                <Comment.Metadata>
                  <div style = {{color:"white"}} >{comments.comments.time}</div>
                </Comment.Metadata>
                <Comment.Text  style = {{color:"white"}}>{comments.comments.content}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action style = {{color:"salmon"}} onClick = {() => Delete()} >Delete</Comment.Action>
                 </Comment.Actions>
              </Comment.Content>
            </Comment>
            </div>
    
        );
    
    
}
 
export default Reply;
