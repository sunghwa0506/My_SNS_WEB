import React, { useEffect, useState } from 'react';
import {db} from '../component/fb';


const DeleteFireStore = (docID) =>
{

    const [DeleteSucess, setDeleteSucess] = useState(false);

    useEffect(() =>
    {
        if(docID)
        {       
                db.collection("Post_Comment").doc(docID).delete()
            .then(() => {
                console.log("Document successfully deleted!");
                setDeleteSucess(true);
               
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });

        }

        
        
    },[docID])

        return {DeleteSucess}

}


export default DeleteFireStore;
