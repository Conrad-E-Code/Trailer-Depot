import {NavLink} from 'react-router-dom'
import useSound from "use-sound"
import buildButton from "../sound/buildButton.mp3"

function NavBar({setRenderState, renderState}) {
    const [play] = useSound(buildButton)

    return (
       <nav className='nav'>
        <ul>
            <li>
                <NavLink  to="/trailers" >All Trailers</NavLink>
            </li>
            <li>
                <NavLink   to="/sales">For Sale</NavLink>
            </li>
            <li>
                <NavLink  to="/rent"> For Rent </NavLink>
                {/* Redirect to home page with message saying rent coming soon if we cant meet goal.*/}
            </li>
            <li>
            <NavLink to="/trailers/new">Post Your Own</NavLink>

            
            </li>
            <li>
            <NavLink to="/builds">Builds</NavLink>
            </li>
            <li>
                <NavLink to="/builds/new">Build Your Own!</NavLink>
            </li>
        </ul>
       </nav> 
    )
}

export default NavBar;