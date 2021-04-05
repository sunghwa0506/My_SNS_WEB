import React from 'react';
import UseFireStore from './hook/useFireStore';



const ImageGrid = () =>
{



    const {doc } = UseFireStore('Post');
    console.log(doc)
    return(
    <div className = "img-grid">
        {doc&& doc.map(doc =>(
        <div className = "img-wrap" key = {doc.id}>
            <img src = {doc.url} alt = "uploaded pic"></img>
        </div>))}
    </div>
    );

}

export default ImageGrid;