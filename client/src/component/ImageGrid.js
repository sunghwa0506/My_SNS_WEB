import React, { useState } from 'react';
import UseFireStore from '../hook/useFireStore';
import Post_modal from './Post_modal'


const ImageGrid = ({user}) =>
{
    const [isOpenPost, setisOpenPost] = useState(false);
    const [PostURL, setPostURL] = useState('');
    const [cursor, setcursor] = useState('');
    const [docID, setdocID] = useState('');


    const toggle =  (url, id) =>
    {
    
        setisOpenPost(!isOpenPost);
        setPostURL(url);
        setdocID(id);
        return true;
    }


    const {doc } = UseFireStore('Post');
    console.log(doc)
    return(
        <div className = "img-grid">
        
        {doc&& doc.map(doc =>(
        <div className = "img-wrap" key = {doc.id}>
            <div style = {{cursor:"pointer"}}>
            <img src = {doc.url} alt = "uploaded pic" onClick = {() => 
                toggle(doc.url,doc.id)         
            }
           ></img>
            </div>
           
        </div>))}
        <Post_modal user={user} url = {PostURL} isOpenPost = {isOpenPost} closePost = {setisOpenPost} id = {docID} ></Post_modal>
        </div>

        
    );

}

export default ImageGrid;