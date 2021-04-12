import React, { useEffect } from 'react';
import { Progress } from 'semantic-ui-react'
import UseStorage from '../../hook/useStorage';

const ProgressBar = ({file, setFile, setOpen,setPostBtnClick,setPreview,setPost_Description,Post_Description}) =>
{
    const {url , progress} = UseStorage(file,Post_Description);
    
    useEffect(() =>
    {
        if(url)
        {
            setFile(null);
            setOpen(false);
            setPostBtnClick(false);
            setPreview("");
            setPost_Description("");
        }

    }, [url,setFile])


    return(    
    <div >
        <Progress percent={progress} color='orange'   size='tiny'/>
        <div style = {{front:"35"}}>
        {progress}%
        </div>
        
    </div>
    );


}

export default ProgressBar;