import React, { useEffect, useState } from 'react'
import GetComments from '../../hook/GetComments'
import CommentDisplay from './CommentDisplay'
import Pagenation from './pagination';
import DeleteFireStore from '../../hook/DeleteFireStore';

const Post_Comments = ({Postid, post_Sucess,Click }) =>
{
    
    const {doc} = GetComments(Postid);
    const [currentPage, setcurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(7);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = doc.slice(indexOfFirstPost,indexOfLastPost);

    const [deleteID, setdeleteID] = useState(null);
    const deleteSucess = DeleteFireStore(deleteID);
    useEffect(()=>
    {

        if(post_Sucess&&(doc.length >= indexOfLastPost)&&Click)
        {   
            setcurrentPage(doc.length/postsPerPage + 1);
        }
    },[post_Sucess,Click])

    const paginate = (pageNumber) =>  setcurrentPage(pageNumber);

    return ( 
    <div> 
        <div className="Comment_Block">
            {currentPost.map((c) =>
            <div key = {c.id}>
                <CommentDisplay key = {c.id} comment = {c} setdeleteID={setdeleteID}></CommentDisplay>
                </div>
            )}
        </div>
          


            <Pagenation currentPage={currentPage} postsPerPage = {postsPerPage} totalPosts = {doc.length} paginate = {paginate}></Pagenation>


    </div>





    );
}

export default Post_Comments;