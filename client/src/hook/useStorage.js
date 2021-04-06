import {useEffect, useState} from 'react';
import {projectStorage, db,timestamp} from '../component/fb';


const UseStorage = (file) =>
{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect (() =>
    {
        const storageRef = projectStorage.ref().child('Post_Image/'+file.name);
        const collectionRef = db.collection('Post');

        storageRef.put(file).on('state_changed',(snap) =>
        {
            let percentage = (snap.bytesTransferred/ snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) =>
        {
            setError(err);
        }, async () =>
        {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt })
            setUrl(url);
        })

    }, [file]);


    return {progress,error,url}
}

export default UseStorage;

