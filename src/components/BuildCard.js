

function BuildCard({build}) {
    //const desc = build["buildDesc"]
   const  {id, name, packages, buildDesc, customize} = build
   const mappedPackages = packages.map((packag)=>{    //leave as packag package is reserved word -_-
    return (<li className='package-map' key={packag.id}>{`${packag.name}`}</li>)
   })
   const packagesPrice = packages.map((object)=>{
    return (object.price)
   })
   let sumPrice = 1000  // add hidden fees here, the'll never know :D
   for (const value of packagesPrice) {
    sumPrice += value
   }
    return(
        <li className='build-item'>
            <div className="build-card" style={{ width: '35rem', textAlign: 'center' }}> 
                <h2 className='build-name'>
                {`${name}`}
                </h2>
                <ul className="package-list">
                <h4 className="build-label">Packages included with this build:</h4>
                <div>{mappedPackages}</div>
                </ul>
                <p className='build-desc'>{`${buildDesc}`}</p>
                <p></p>
                <h3 className="build-price">{`Total Price: $${sumPrice}.95`}</h3>
            </div>
        </li>
    )
}

export default BuildCard