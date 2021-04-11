import { useEffect, useState } from "react"
import {db,timestamp} from '../component/fb';



const PostComment = (Click,InputComment,Postid,setClick,setInputComment,user) =>
{

    const [sucess, setsucess] = useState(null);
    
    
   

    useEffect(() =>
    {
        
        if(InputComment && Click)
        {
            
            const createdAt = timestamp();

            console.log("test from postCommetns "+ Postid+ " "+InputComment + " " +createdAt + " " +user)
             db.collection("Post_Comment").add({Postid,createdAt,InputComment,user}).then((docRef) => {
                
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

            setInputComment("")
            setsucess(true)
        }
        if(!InputComment&&Click)
        {
            setsucess(false)
        }
        
        setClick(false)
    },[Click,InputComment])

    return {sucess};
}


export default PostComment
