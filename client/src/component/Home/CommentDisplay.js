import React, { useState } from 'react'
import {Comment,Icon,Button,Form} from 'semantic-ui-react'
import ModifyFireStore from '../../hook/ModifyFireStore';

const CommentDisplay = ({comment,setdeleteID}) =>
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

    var avatar = "";

    if(comment.user == 'Visitor')
    {
        avatar = "user outline";
    }


    const [Modify,setModify] = useState(false);
    const [NewComment, setNewComment] = useState(comment.InputComment);
    const [docID,setdocID] = useState(null);
    const [ModifyToggle, setModifyToggle] = useState(true);



    const modifySucess = ModifyFireStore(docID,NewComment,ModifyToggle);

    const modify_comment_fuc = (e) =>
    {
        e.preventDefault();
        setdocID(comment.id);
        setModifyToggle(!ModifyToggle);
        setModify(false);
    }
    return ( <div className="comments">
        {!Modify && 
                
            <Comment>
                <span>
                <Icon name = {avatar}></Icon>
                <Comment.Author as='a' style = {{color:"Navy", margin:"5px"}} >{comment.user}</Comment.Author>        
                {Date}
  
                </span>
                <div className='comments_list'>{comment.InputComment}</div>

                  <Comment.Action style = {{color:"salmon", cursor: "pointer"}} onClick={() => setdeleteID(comment.id)}>Delete</Comment.Action>
                  <Comment.Action style = {{color:"DarkCyan", cursor: "pointer", marginLeft:"7px"}} onClick={() => setModify(true)}>Modify</Comment.Action>
            </Comment>
            }

            {Modify&&
                <div >
                   <span>
                <Icon name = {avatar}></Icon>
                <Comment.Author as='a' style = {{color:"Navy", margin:"5px"}} >{comment.user}</Comment.Author>
                </span>
               <Form reply>
                <Form.TextArea value={NewComment} onChange={(e) => setNewComment(e.target.value)}/>
                <Button content='Edit' labelPosition='left' icon='edit outline' basic color='black'
                onClick={(e) =>modify_comment_fuc(e)}/>
                </Form>
                </div>
                }
            </div>
       
    )

}

export default CommentDisplay;