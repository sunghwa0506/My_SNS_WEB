import { useEffect, useState } from 'react';
import {db} from '../component/fb';



const GetComments = (Postid) =>
{

    const [doc, setDoc] = useState([]);

    useEffect(() =>
    {
        if(Postid)
        {
            db.collection("Post_Comment").where("Postid","==",Postid).orderBy('createdAt','asc')
            .onSnapshot((querySnapshot) => {
                console.log("getComments")
                var comments = [];
                querySnapshot.forEach((doc) => {
                    comments.push({...doc.data(),id:doc.id});
                });

                setDoc(comments);
            })
        }
    
       
    },[Postid])


    return {doc}

}

export default GetComments