import React , {useState, useEffect } from 'react';
import UploadForm from "./Form.js";
import ImageGrid from './ImageGrid.js';
import { Grid } from 'semantic-ui-react';

function Post_List(){
    

      return(


        <div style = {{color:"white"}}>
          

          <Grid>
            <Grid.Column width={3}>
            </Grid.Column>

            <Grid.Column width={9}>
            <UploadForm></UploadForm>
              <ImageGrid></ImageGrid>
            </Grid.Column>

            <Grid.Column width={3}>
            </Grid.Column>
          </Grid>
         
        </div>
    );


    
}




export default Post_List