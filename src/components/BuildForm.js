import { useEffect, useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"
import useSound from "use-sound"
import buildButton from "../sound/buildButton.mp3"
function BuildForm(props) {
    const [play] = useSound(buildButton)
    const [availPacks, setAvailPacks] = useState([])
    const[isChecked, setIsChecked] = useState(true)
    function checkHandler() {
        console.log("checkHandler")
        setIsChecked(!isChecked.package111)
    }
    useEffect(() => {
fetch("http://localhost:3001/packages")
.then(r => r.json())
.then((packsData => setAvailPacks(packsData)))
    },[])
   const mappedPacks = availPacks.map((pack)=> {
    return ( 
        <>
            {`${pack.name}`}
            {isChecked ?
            <label key={pack.name} >
                 <input onChange={checkHandler}type="checkbox" name={pack.name} >
                 </input>
                 <p>{`Package Includes: ${pack.description}`}</p>
            </label>:
            <label key={pack.name} >
             <input onChange={checkHandler} type="checkbox" name={pack.name}>
                </input>
            </label>
            }
            
        
        <br/>
        </> 
        
    )
   })
    return(
        <div>
            Hello from BuildForm
            <form onSubmit={(e) => {e.preventDefault()}}>
               <ul> <li><input type="text" placeholder="Name"></input></li>
                    {mappedPacks}
                    <li><input type="text" placeholder="buildDesc Describe what you need">
                    </input></li>
                    <br/>
                    <li><input type="text" placeholder="customize Tell us your custom ides ">
                    </input></li>
                    <button onClick={play} id="buildButton2A" type="submit">BUILD IT!</button>
                </ul>
         </form>
        </div>
    )
}

export default BuildForm