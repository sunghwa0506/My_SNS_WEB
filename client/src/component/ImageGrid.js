import React, { useState } from 'react';
import UseFireStore from '../hook/useFireStore';
import Post_modal from './Post_modal'


const ImageGrid = () =>
{
    const [isOpenPost, setisOpenPost] = useState(false);
    const [PostURL, setPostURL] = useState('');
    const [cursor, setcursor] = useState('');

    const toggle =  (url) =>
    {
        console.log(url)
        setisOpenPost(!isOpenPost);
        setPostURL(url);

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
            toggle(doc.url)          
            }
           ></img>
            </div>
           
        </div>))}
        <Post_modal url = {PostURL} isOpenPost = {isOpenPost} closePost = {setisOpenPost} ></Post_modal>
        </div>

        
    );

}

export default ImageGrid;