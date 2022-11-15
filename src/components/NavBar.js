import {NavLink} from 'react-router-dom'


function NavBar({setRenderState, renderState}) {
    return (
       <nav className='nav'>
        <ul>
            <li>
                <NavLink to="/" onClick={() => setRenderState(!renderState)}>All Trailers</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setRenderState(!renderState)} to="/sales">For Sale</NavLink>
            </li>
            <li>
                <NavLink onClick={() => setRenderState(!renderState)} to="/rent"> For Rent </NavLink>
                {/* Redirect to home page with message saying rent coming soon if we cant meet goal.*/}
            </li>
            <li>
            <NavLink onClick={() => setRenderState(!renderState)} to="/reviews">Post Your Own</NavLink>
            </li>
        </ul>
       </nav> 
    )
}

export default NavBar;