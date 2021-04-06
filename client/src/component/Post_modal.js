import { Button, Header, Image, Modal ,Icon} from 'semantic-ui-react'
import React, { useEffect,useState } from 'react'

const ModalExampleModal =  ({isOpenPost, closePost, url}) => {

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
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
            <Image style = {photo} size='medium' src = {url} bordered ></Image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => { closePost(false)}}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
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