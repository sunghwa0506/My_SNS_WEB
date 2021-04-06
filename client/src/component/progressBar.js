import React, { useEffect } from 'react';
import { Progress } from 'semantic-ui-react'
import UseStorage from '../hook/useStorage';

const ProgressBar = ({file, setFile}) =>
{
    const {url , progress} = UseStorage(file);
    
    useEffect(() =>
    {
        if(url)
        {
            setFile(null);
        }

    }, [url,setFile])


    return(    
    <div >
        <Progress percent={progress} color='orange'   size='tiny'/>
    </div>
    );


}

export default ProgressBar;