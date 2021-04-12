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
            <a >Share</a>
            <div className="dropdown-content">
            <Link to="/interview">Interview Experience</Link>
            <Link to="/">Comming Soon</Link>
            <Link to="/">Comming Soon</Link>
            </div>
            </div>
            <Link to = '/about'>About</Link>
        </div>
    )
}

export default Navigator;