import React, { useState } from 'react';
import UseFireStore from '../../hook/useFireStore';
import Post_modal from './Post_modal'
import { Icon } from 'semantic-ui-react'

const ImageGrid = ({user}) =>
{
    const [isOpenPost, setisOpenPost] = useState(false);
    const [PostURL, setPostURL] = useState('');
    const [cursor, setcursor] = useState('');
    const [docID, setdocID] = useState('');
    const [Post_Description,setPost_Description] = useState('');

    const toggle =  (url, id, Post_Description) =>
    {
    
        setisOpenPost(!isOpenPost);
        setPostURL(url);
        setdocID(id);
        setPost_Description(Post_Description);
        return true;
    }


    const {doc } = UseFireStore('Post');
    console.log(doc)
    return(
        <div>

        
            <div className = "img-grid">
            
            {doc&& doc.map(doc =>(
            
            <div className = "img-wrap" key = {doc.id}>

                <div style = {{cursor:"pointer"}} onClick = {() => toggle(doc.url,doc.id, doc.Post_Description)}>
                <div style={{fontWeight:"bold",fontSize:"large"}}>
                {doc.Post_Description}
                </div>
    
                {doc.url&&<img   src = {doc.url} alt = "uploaded pic"></img>}
                </div>




                <div class="footer">
                <Icon size = "large" name='comment alternate outline' />
                10 comments
                <Icon style={{marginLeft:"10px"}} size = "large" name='like' />
                10 likes
                </div>
            
            </div>))}
            </div>
        
 
            <Post_modal user={user} url = {PostURL} isOpenPost = {isOpenPost} 
            closePost = {setisOpenPost} id = {docID} Post_Description={Post_Description} ></Post_modal>
   
        
        </div>

        
    );

}

export default ImageGrid;