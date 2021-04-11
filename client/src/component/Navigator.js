import {Grid, Header,Menu, MenuItem, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Navigator = () =>
{
    return(
        <div className= "navbar">
            <h1 >SNS WEB</h1>

            <div className = "links"></div>
            <Link to = '/'>Home</Link>
            <div class="dropdown">
            <a href="javascript:void(0)">Share</a>
            <div class="dropdown-content">
            <Link to="/interview">Interview Experience</Link>
            <Link to="javascript:void(0)">Comming Soon</Link>
            <Link to="javascript:void(0)">Comming Soon</Link>
            </div>
            </div>
            <Link to = '/about'>About</Link>
        </div>
    )
}

export default Navigator;