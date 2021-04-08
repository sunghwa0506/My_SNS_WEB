import React, { useState } from 'react'
import {Comment,Icon} from 'semantic-ui-react'


const CommentDisplay = ({comment}) =>
{

    var Date = "";

    if(comment.createdAt)
    {
        let time = comment.createdAt.toDate()
        let date = time.getDate();
        let month = time.getMonth();
        let year = time.getFullYear();
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds()
        Date = month + "/" +date+ "/"+ year+' '+ hour+": "+minutes;
    }
 


    return (
        <div className="comments">
            <Comment>
                <span>
                <Icon name = "user outline"></Icon>
                <Comment.Author as='a' style = {{color:"Navy"}} >{comment.user}</Comment.Author>
                </span>
                <div className='comments_list'>{comment.InputComment}</div>
                <Comment.Metadata>
                  <div>{Date}</div>
                </Comment.Metadata>
                <Comment.Actions>
                  <Comment.Action style = {{color:"salmon"}} >Delete</Comment.Action>
                 </Comment.Actions>
            </Comment>
        </div>
    )

}

export default CommentDisplay;