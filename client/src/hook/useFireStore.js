import { useEffect, useState } from "react"
import {db} from '../fb';


const UseFireStore = (collection) =>
{
    const [doc , setDoc] = useState([]);

    useEffect(() =>
    {
        const unsub = db.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap) =>
        {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(),id:doc.id})
            });
            setDoc(documents);
        })

        return () => unsub();
    },[collection])
    return {doc};
}

export default UseFireStore;