import React from 'react'
import GetComments from '../hook/GetComments'
import CommentDisplay from './CommentDisplay'

const Post_Comments = ({Postid}) =>
{
    
    
    const {doc} = GetComments(Postid);

    


    console.log(doc)
    return ( 
    <div> 
           {doc.map((c) =>
           <CommentDisplay key = {c.id} comment = {c}></CommentDisplay>)}
    </div>
    );
}

export default Post_Comments;