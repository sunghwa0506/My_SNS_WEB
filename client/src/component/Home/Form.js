import React, { useState,useRef } from 'react';
import ProgressBar from './progressBar';
import { Button, Modal,Image} from 'semantic-ui-react';


const UploadForm = ({user}) =>
{

    const [file, setFile] = useState(null);
    const [error,setError] = useState(null);

    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState("");
    const [Post_Description, setPost_Description] = useState("");
    const [PostBtnClick, setPostBtnClick] = useState(false);


    const changeHandler = (e) =>
    {

        const reader = new FileReader();
        reader.onload = () =>
        {
            if(reader.readyState ===2)
            {
                setPreview(reader.result);
            }
        }

        reader.readAsDataURL(e.target.files[0]);


        let selected = e.target.files[0];
        if(selected)
        {
            

            setFile(selected);
            setError(null);
        }
        else
        {
            setError("Please select an image file (png or jpeg");

        }
    }

    const closeModal = () =>
    {
        setOpen(false)
        setPreview("");
        setPost_Description("");
    }

    const PostClick = () =>
    {
        setPostBtnClick(true);
    }


    return (
        <div style = {{color:"white"}}>
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button primary>Post</Button>}
            >
            <Modal.Header>Create a post</Modal.Header>        
            <Modal.Description>

            <form className="Post">
            <div className="textArea">
            <textarea placeholder="What are you thinking?" value={Post_Description}
            onChange={(e) =>setPost_Description(e.target.value)}></textarea>
            </div>
            </form>

            {preview&&<div><Image src={preview} size='large'></Image></div>}

            <div className = "output">
                    {error && <div className = "error">{ error }</div>}
                    {(PostBtnClick&&(Post_Description||preview)) && <ProgressBar file = {file} setFile = {setFile} 
                    setOpen={setOpen} setPostBtnClick={setPostBtnClick} setPreview={setPreview}
                    setPost_Description={setPost_Description} Post_Description={Post_Description}></ProgressBar>}
            </div>
            


       

            <label >
                <input type="file" accept="image/*" onChange={changeHandler} />
            </label>

  
            
      
            </Modal.Description>
 
            <Modal.Actions>
            <Button
            content="Post"
            labelPosition='right'
            icon='checkmark'
            onClick={() => PostClick()}
            positive
            />
            <Button color='black' onClick={() => closeModal()}>
            Cancel
            </Button>

            </Modal.Actions>
            </Modal>
        </div>

    );
}

export default UploadForm;