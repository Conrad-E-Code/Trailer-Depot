import { useEffect, useState } from "react"
import useSound from "use-sound"
import buildButton from "../sound/buildButton.mp3"
function BuildForm(props) {
    const [play] = useSound(buildButton)
    const [availPacks, setAvailPacks] = useState([])
    useEffect(() => {
fetch("http://localhost:3001/packages")
.then(r => r.json())
.then((packsData => setAvailPacks(packsData)))
    },[])
    return(
        <div>
            Hello from BuildForm
            <form onSubmit={(e) => {e.preventDefault()}}>
                <input type="text" placeholder="Name"></input>
{/* Render available packages as checkboxes */}
<button onClick={play} id="buildButton2A" type="submit">BUILD IT!</button>
            </form>
        </div>
    )
}

export default BuildForm