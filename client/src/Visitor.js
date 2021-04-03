import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'



class ModalScrollingExample extends React.Component {



    render()
    {
        return (
            <Modal
              open={this.props.open}
            >
              <Modal.Header>Visitor</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  
                {this.props.visitor.map(visitor =>                   
                  <p>
                  {visitor}
                  </p>)} 

                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary onClick={() => this.props.close()}>
                  Exit <Icon name='right chevron' />
                </Button>
              </Modal.Actions>
            </Modal>
          )
    }
    


 
}

export default ModalScrollingExample