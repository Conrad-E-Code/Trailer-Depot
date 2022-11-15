
function ReviewCard(props) {
    const imageArray = ["./trailer-basecoat","./stenciling-process"]
    const renderImages = imageArray.map((imagesrc) => {
        console.log(imagesrc)
            return (
                <li>
                    <img src="./trailer-basecoat.JPG" alt="IMAGE" />
                    </li>
        )})
    
    return <div> 
        <h2>Render Name Here</h2>
        <p>Render Price Here</p>
        <p> Conditionally render for sale/not for sale</p>
        <ul>
            <li>IMAGE LIST HERE</li>
            {renderImages}
        </ul>

    </div>
}

export default ReviewCard