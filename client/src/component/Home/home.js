import React , {useState, useEffect } from 'react';
import UploadForm from "./Form.js";
import ImageGrid from './ImageGrid.js';
import { Grid ,Button,Header,Image, Modal} from 'semantic-ui-react';


function Post_List({user}){
    


      return(


        <div style = {{color:"white"}}>
          

          <Grid>
            <Grid.Column width={5}>
            <UploadForm></UploadForm>
            </Grid.Column>
            <Grid.Column width={6}> 
              <ImageGrid user = {user}></ImageGrid>
            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
          </Grid>
         
        </div>
    );


    
}




export default Post_List