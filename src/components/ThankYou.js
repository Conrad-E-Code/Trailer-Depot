import {Link} from "react-router-dom"
import useSound from "use-sound"
import buildButton from "../sound/buildButton.mp3"
function ThankYou(props) {
  const [play] = useSound(buildButton)
return(
    <div className="thank-you-div">
        <h1>We're On It, THANK YOU!
        </h1>
        <p>If you are seeing this page, Thanks! Your request was submitted!</p>
        <br/>
        <button onClick={play} >Complaints?</button>
        <br/>
        <span style={{paddingBottom: "100px"}}><Link to="/builds">See Our Current Workload</Link></span><br/>
        <span><Link to="/"> Return To Home</Link></span><br/>
        <span><Link to="/stretch">Stretch Goals</Link></span><br/>
        
    </div>
    )
}

export default ThankYou