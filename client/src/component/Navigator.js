import {Grid, Header,Menu, MenuItem, Segment} from 'semantic-ui-react';


const Navigator = () =>
{
    return(
        <div className= "navbar">
            <h1 >SNS WEB</h1>

            <div className = "links"></div>
            <a href = '/'>Home</a>
            <a href = '/'>Post</a>
        </div>
    )
}

export default Navigator;