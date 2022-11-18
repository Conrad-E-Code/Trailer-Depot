import { useEffect, useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"
import useSound from "use-sound"
import buildButton from "../sound/buildButton.mp3"
import PackageList from "./PackageList"
import {useNavigate} from "react-router-dom"
import electricalBox from "../images/electricalBox.jpg"
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
fetch("http://localhost:3000/packages")
.then(r => r.json())
.then((packsData => setAvailPacks(packsData)))
    },[])
   const mappedPacks = availPacks.map((pack)=> {
    return ( 
        <li style={{backgroundColor: "antiquewhite",}} key={`${pack.name}-li`}>
            <span style={{fontWeight: "bold",
                            backgroundColor: "antiquewhite"}}>{`${pack.name}`}</span>
            {isChecked ?
            <label style={{backgroundColor: "antiquewhite"}} className="bfdiv" key={`${pack.name}-label`} >
                 <input style={{backgroundColor: "antiquewhite"}} key={`${pack.name}-input`}onChange={(e) => checkHandler(e)}type="checkbox" name={parseInt(pack.price)} >
                 </input>
                 <p style={{backgroundColor: "antiquewhite"}} key={`${pack.name}-p`}>{`Package Includes: ${pack.description}`}</p>
            </label>:
            <label style={{backgroundColor: "antiquewhite"}}  key={pack.name} >
             <input style={{backgroundColor: "antiquewhite"}}  key={`${pack.name}-label-false`} onChange={checkHandler} type="checkbox" name={pack.name}>
                </input>
            </label>
            }
            
        
        <br/>
        </li> 
        
    )
   })
   function handleBuild() {
    play()
const bpObj = {
    method:"POST",
    headers:{"content-type": "application/json"},
    body: JSON.stringify(buildFormData)
}
    fetch("http://localhost:3000/builds",bpObj)
    .then(r => r.json())
    .then(respBuild => {
        setBuilds([respBuild, ...builds])
        history("/Thankyou")    
    })

   }
    return(
        <li className="li-padding" ><div className="bfdiv">

            <form className="build-form" style={{ width: '35rem', textAlign: 'center' }}
onSubmit={(e) => {e.preventDefault()}}>
               <ul className="build-form-list" > <li style={{backgroundColor: "antiquewhite"}}><input style={{width: "425px",height:"25px", borderRadius: "5px"}}  value={formName} onChange={(e) => setFormName(e.target.value)}type="text" placeholder="Name"></input></li>
                    {mappedPacks}
                    <li style={{backgroundColor: "antiquewhite"}}><input  
                    style={{width: "425px",height:"25px", borderRadius: "5px"}}value={formDesc} onChange={(e) => setFormDesc(e.target.value)} type="text" placeholder=" Describe what you need">
                    </input></li>
                    <br/>
                    <li style={{backgroundColor: "antiquewhite"}}><input 
                    style={{width: "425px",height:"25px", borderRadius: "5px"}} value={formCustom} onChange={(e) => setFormCustom(e.target.value)}type="text" placeholder=" Tell us your custom ides ">
                    </input></li>
                    <p style={{backgroundColor: "antiquewhite"}}>${estBuildCost} Estimated cost with included packages</p>
                    <button title="Are you sure?" style={{backgroundColor: "white",
                cursor: "pointer", position: "relative"}} onClick={handleBuild} id="buildButton2A" type="submit">BUILD IT!</button>
                </ul>
         </form>
        </div>
        </li>
    )
}

export default BuildForm