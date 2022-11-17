import { useEffect, useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"
import useSound from "use-sound"
import buildButton from "../sound/buildButton.mp3"
import PackageList from "./PackageList"
import {useNavigate} from "react-router-dom"
function BuildForm({builds, setBuilds}) {
    const history = useNavigate()
    const [play] = useSound(buildButton)
    const [availPacks, setAvailPacks] = useState([])
    const[isChecked, setIsChecked] = useState(true)  //keep true for now to render checkboxes functionality to come later hopefully
    const [selectedPackages, setSelectedPackages] = useState([])
    const [formName, setFormName] = useState("")
    const [formDesc, setFormDesc] = useState("")
    const [formCustom, setFormCustom] = useState("")
    //const [formPrice, setFormPrice] = useState(0)

    let estBuildCost = 1000
    for (const value of selectedPackages) {
        estBuildCost += value
    }
    const buildFormData = {
        name: formName,
        packages: [{
            "id": 111,
            "name": "Starter Package",
            "description": "Includes basic road-safety",
            "price": 200
          }],
        buidDesc: formDesc,
        customize: formCustom,
        // price: estBuildCost,
    }
    function checkHandler(e) {
//         let sumPrice = 1000  // add hidden fees here, the'll never know :D
//    for (const value of packagesPrice) {
//     sumPrice += value
//    }
        
        //console.log("checkHandler")
        //console.log(buildFormData)
        //console.log(typeof(selectedPackages[0]))
        //setIsChecked(!isChecked.package111)
        setSelectedPackages(selectedPackages =>[...selectedPackages, parseInt(e.target.name)])

    }
    // const packageCart = selectedPackages.filter((packag, index) => {
    //     return packag.indexOf(packag) === index
    // })

    // const uniqueSearchList = searchList.filter((planeteer, index) =>{
    //     return searchList.indexOf(planeteer) === index;
    //   })

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
                 <input onChange={(e) => checkHandler(e)}type="checkbox" name={parseInt(pack.price)} >
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
   function handleBuild() {
    play()
const bpObj = {
    method:"POST",
    headers:{"content-type": "application/json"},
    body: JSON.stringify(buildFormData)
}
    fetch("http://localhost:3001/builds",bpObj)
    .then(r => r.json())
    .then(respBuild => {
        setBuilds([respBuild, ...builds])
        history("/builds")    
    })

   }
    return(
        <div>
            Hello from BuildForm
            <form onSubmit={(e) => {e.preventDefault()}}>
               <ul> <li><input value={formName} onChange={(e) => setFormName(e.target.value)}type="text" placeholder="Name"></input></li>
                    {mappedPacks}
                    <li><input value={formDesc} onChange={(e) => setFormDesc(e.target.value)} type="text" placeholder="buildDesc Describe what you need">
                    </input></li>
                    <br/>
                    <li><input value={formCustom} onChange={(e) => setFormCustom(e.target.value)}type="text" placeholder="customize Tell us your custom ides ">
                    </input></li>
                    <p>${estBuildCost} Estimated cost with included packages</p>
                    <button onClick={handleBuild} id="buildButton2A" type="submit">BUILD IT!</button>
                </ul>
         </form>
        </div>
    )
}

export default BuildForm