import {Link} from "react-router-dom"
import useSound from "use-sound"
import buildButton from "../sound/buildButton.mp3"
function ThankYou(props) {
  const [play] = useSound(buildButton)
return(
    <div>
        <h1>We're On IT THANK YOU!
        </h1>
        <p>If you are seeing this page, Thanks! Your request was submitted!</p>
        <button onClick={play} >Complaints?</button>
        <Link to="/builds">See Our Current Workload</Link>
        <Link to="/"> Return To Home</Link>
        <Link to="/stretch" >Stretch Goals</Link>
        
    </div>
    )
}

export default ThankYou