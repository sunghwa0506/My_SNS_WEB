import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) =>
{
    const pageNumber = [];

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumber.push(i);
    }


    return (
        
            <div className ="pagination">
                {pageNumber.map(number =>   
                {
                    if(number == currentPage)      
                    {
                       return (< a  key={number} className="active" onClick = {() =>
                        paginate(number)}> 
                            {number}
                        </a>) 
                    }    
                    else
                    { 
                        return (< a key={number} onClick = {() =>
                        paginate(number)}> 
                            {number}
                        </a>)

                    }   
                }
                    
                        
                    
                )}
        
        </div>
    )
}

export default Pagination;