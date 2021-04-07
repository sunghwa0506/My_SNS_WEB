import { Button, Header, Image, Modal ,Icon} from 'semantic-ui-react'
import React, { useEffect,useState } from 'react'
import Post_Comments from './Post_Comments'
import Accept_Comment from './accept_Comments'

const ModalExampleModal =  ({isOpenPost, closePost, url,id,user}) => {

    const photo = 
    {
        height : 600,
        width : 600
    }


    return (

       <div>
    
        <Modal
        open={isOpenPost}
      >
        <Modal.Header>Please Comment</Modal.Header>
        <Modal.Content image>
            <Image style = {photo} size='medium' src = {url} bordered ></Image>
          <Modal.Description>
            <Header>Comments</Header>
        
              <Post_Comments Postid = {id}></Post_Comments>
        
           
              <Accept_Comment  Postid = {id} user= {user}></Accept_Comment>
        

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Exit"
            labelPosition='right'
            icon='checkmark'
            onClick={() =>{ closePost(false)}}
            positive
          />
        </Modal.Actions>
      </Modal>
       </div>
     
    )
  }
  
  export default ModalExampleModal