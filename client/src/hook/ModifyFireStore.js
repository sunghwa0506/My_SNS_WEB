import React, { useEffect, useState } from 'react';
import {db} from '../component/fb';


const ModifyFireStore = (id,NewComment,ModifyToggle) =>
{
    const [sucess] =useState(false);

    useEffect(()=>
    {
        if(NewComment&&id)
        {
             db.collection("Post_Comment").doc(id).
             update({
                 InputComment:NewComment
             })
             .then(()=>
             {
                console.log("Document successfully updated!");
             })
             .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }

    },[ModifyToggle])

    return {sucess}
}

export default ModifyFireStore;