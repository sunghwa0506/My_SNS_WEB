import React, { useState } from 'react';
import ProgressBar from './progressBar';
import { Segment, Input ,Icon} from 'semantic-ui-react'


const UploadForm = ({user}) =>
{

    const [file, setFile] = useState(null);

    const type = ['image/png', 'image/jpeg'];
    const [error,setError] = useState(null);



    const changeHandler = (e) =>
    {
        let selected = e.target.files[0];
        if(selected && type.includes(selected.type))
        {

            setFile(selected);
            setError(null);
        }
        else
        {
            setError("Please select an image file (png or jpeg");

        }
    }



    return (
        <div style = {{color:"white"}}>
            <form>    
            <label>
                <input type="file" onChange={changeHandler} />
                <Icon name = "plus"></Icon>
            </label>


                <div className = "output">
                    {error && <div className = "error">{ error }</div>}
                    {file && <div className = "file">{ file.name }</div>}
                    {file && <ProgressBar file = {file} setFile = {setFile}></ProgressBar>}
                </div>
            </form>
        </div>

    );
}

export default UploadForm;