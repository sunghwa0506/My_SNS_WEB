import {useEffect, useState} from 'react';
import {projectStorage, db,timestamp} from '../component/fb';


const UseStorage = (file,Post_Description) =>
{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect (() =>
    {
        
        if(file)
        {
            
    
            const storageRef = projectStorage.ref().child('Post_Image/'+file.name);
            const collectionRef = db.collection('Post');
            storageRef.put(file).on('state_changed',(snap) =>
            {
                let percentage = (snap.bytesTransferred/ snap.totalBytes) * 100;
                percentage = percentage.toFixed(0);
                setProgress(percentage);
    
            }, (err) =>
            {
                setError(err);
            }, async () =>
            {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                
                collectionRef.add({url,Post_Description, createdAt });
                setUrl(url);          
            })
        }
        else
        {
            const collectionRef = db.collection('Post');
            const createdAt = timestamp();
            collectionRef.add({Post_Description, createdAt }).then((docRef) => {
                setUrl(docRef.id); 
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
               
        }

       

    }, [file]);


    return {progress,error,url}
}

export default UseStorage;

