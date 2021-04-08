import { Button, Header, Image, Modal ,Icon} from 'semantic-ui-react'
import React, { useEffect,useState } from 'react'
import Post_Comments from './Post_Comments'
import Accept_Comment from './accept_Comments'

const ModalExampleModal =  ({isOpenPost, closePost, url,id,user}) => {



    return (

       <div>
    
        <Modal
        open={isOpenPost}
      >
        <Modal.Header>Please Comment</Modal.Header>
          <Modal.Content>
          <div className="photo">
          <img  src = {url} ></img>
          </div>
          </Modal.Content>

          <Header>Comments</Header>

          <Post_Comments Postid = {id}></Post_Comments>  

          <Accept_Comment  Postid = {id} user= {user} closePost={closePost}></Accept_Comment>
      </Modal>
       </div>
     
    )
  }
  
  export default ModalExampleModal