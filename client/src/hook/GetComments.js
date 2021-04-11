import { useEffect, useState } from 'react';
import {db} from '../component/fb';



const GetComments = (Postid,DeleteComments) =>
{

    const [doc, setDoc] = useState([]);


    useEffect(() =>
    {

        
        if(Postid)
        {
            const result =  db.collection("Post_Comment").where("Postid","==",Postid).orderBy('createdAt','asc')
            .onSnapshot((querySnapshot) => {
                console.log("getComments")
                var comments = [];
                querySnapshot.forEach((doc) => {
                    comments.push({...doc.data(),id:doc.id});
                });

                setDoc(comments);
            })

            return () => result();
        }
    
      
    },[Postid])


    return {doc}

}

export default GetComments