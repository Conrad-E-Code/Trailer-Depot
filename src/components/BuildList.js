import {useEffect, useState} from "react"
import {useSound} from "use-sound"
import BuildCard from "./BuildCard"


function BuildList({builds}) {


const buildElements = builds.map((build) => {
return <BuildCard key={build.name} build={build}/>
})


    return (
        <div>
            {buildElements}
        </div>
    )
}

export default BuildList