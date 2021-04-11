
import React, { useEffect, useReducer, useState } from 'react';
import {Button, Comment, Form, Header, Visibility} from 'semantic-ui-react';
import PostComment from '../../hook/PostComments';
import Post_Comments from './Post_Comments'

const Accept_Comment = ({Postid,user,closePost}) =>
{

    const [InputComment, setInputComment] = useState("");
    const [Click, setClick] = useState(false);
    const test = PostComment(Click,InputComment,Postid,setClick,setInputComment,user);

    const [emptyAlert, setEmptyAlert] = useState({
        color:"red",
        backgroundColor:"Cyan",
        display:"inline",
        visibility:"hidden"
    })
    
    useEffect(()=>
    {
        console.log(test.sucess)
        if(test.sucess||test.sucess==null)
        {
            setEmptyAlert({
                color:"red",
                backgroundColor:"Cyan",
                display:"inline",
                visibility:"hidden"
            })
        }
        else
        {
            setEmptyAlert({
                color:"red",
                backgroundColor:"Cyan",
                display:"inline",
                visibility:"visible"
            })
        }
    },[test.sucess])

   


    const   onchangeHandler = (e) =>
        {
            setInputComment(e.target.value)
        }

    const onClickHandler = () =>
    {
        setClick(true);
    }

    return (
    <div>
        
        <Post_Comments Postid = {Postid} post_Sucess={test.sucess} Click={Click}></Post_Comments> 

<div style={emptyAlert}>Please put your comments, Empty string is not allowed</div>
        <Form reply>
          <Form.TextArea value = {InputComment}
                        placeholder ={"Please add comments"} 
                        onChange = {(e) => onchangeHandler(e)} />

            <div style={{float: "right", marginBottom:10}}>
                

                <Button
                content="Exit"
                labelPosition='left'
                icon='checkmark'
                onClick={() =>{ closePost(false)}}
                positive
            />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary 
            onClick = {() => onClickHandler()}/>
            </div>
        </Form>
    </div>
    )
}

export default Accept_Comment;