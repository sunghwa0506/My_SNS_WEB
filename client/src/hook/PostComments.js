import { useEffect, useState } from "react"
import {db,timestamp} from '../component/fb';



const PostComment = (Click,InputComment,Postid,setClick,setInputComment,user) =>
{

    const [docID, setdocID] = useState(null);
    const createdAt = timestamp();
    


    useEffect(() =>
    {
       

        if(InputComment && Click)
        {

            db.collection("Post_Comment").add({Postid,createdAt,InputComment,user}).then((docRef) => {
                setdocID(docRef.id)
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

            setInputComment("")
        }
 
        setClick(false)
    },[Click,useState,InputComment])

  
    return {docID};
}


export default PostComment
