
function ReviewCard({name,price,forSale,imageAlbum}) {
    //const imageArray = ["./trailer-basecoat","./stenciling-process"]
    const renderImages = imageAlbum.map((imagesrc) => {
      
            return (
                
                    <img src={imagesrc} alt='this is a canvas'/>
                    
        )})
    




    return <div> 
        
        <h2>{name}</h2>
        <p>{price}</p>
        <p> {forSale ? "For Sale!" : "Priceless "}</p>
        <ul>
            {renderImages}
            
        </ul>

    </div>
}

export default ReviewCard