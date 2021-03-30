import React from 'react';
import {Image, Divider, Header, Icon, Grid,Button} from 'semantic-ui-react'
import Comments from './Comments.js'
import Buttons from './buttons.js'
import myImage from './ir.jpg';

class App extends React.Component {

    
    render()
    {
      return (
        <div style={{backgroundColor: "black"}}>
        <Image src={myImage} size='medium' rounded centered style={{marginTop:'10%'}}/>
        <br/>
        <Grid centered > 
          <Grid.Row>
          <Buttons></Buttons>

          </Grid.Row>
          
          <Grid.Row style = {{color:"white"}}>
          
          <Divider horizontal >
        <Header as='h5' style = {{color:"white"}}>
        <div style = {{color:"white"}}> 
        <Icon name='comment alternate'  style = {{color:"white"}} />
        Please comment</div>
      </Header>
      </Divider>
          
          </Grid.Row>


       </Grid>
    <Grid.Row>
    <Comments/>
    </Grid.Row>

      </div>
      );
    }

}

export default App;
