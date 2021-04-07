
import React, { useEffect, useReducer, useState } from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react';
import PostComment from '../hook/PostComments';

const Accept_Comment = ({Postid,user}) =>
{

    const [InputComment, setInputComment] = useState("");
    const [Click, setClick] = useState(false);
    const {test} = PostComment(Click,InputComment,Postid,setClick,setInputComment,user)
    

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
        <Form reply>
          <Form.TextArea value = {InputComment}
                        placeholder ={"Please add comments"} 
                        onChange = {(e) => onchangeHandler(e)} />

          <Button content='Add Reply' labelPosition='left' icon='edit' primary 
          onClick = {() => onClickHandler()}/>
        </Form>
    </div>
    )
}

export default Accept_Comment;