

function BuildCard({build}) {
    //const desc = build["buildDesc"]
   const  {id, name, packages, buildDesc, customize} = build
   const mappedPackages = packages.map((packag)=>{    //leave as packag package is reserved word -_-
    return (<li key={packag.id}>{`${packag.name}`}</li>)
   })
   const packagesPrice = packages.map((object)=>{
    return (object.price)
   })
   let sumPrice = 1000  // add hidden fees here, the'll never know :D
   for (const value of packagesPrice) {
    sumPrice += value
   }
    return(
        <div> 
            <h2>
                {`${name}`}
            </h2>
            <ul>
                <h4>Packages included with this build:</h4>
            {mappedPackages}
            Click to show package details
            </ul>
            <p>{`${buildDesc}`}</p>
            <p></p>
            <h3>{`Total Price: $${sumPrice}.95`}</h3>
        </div>
    )
}

export default BuildCard