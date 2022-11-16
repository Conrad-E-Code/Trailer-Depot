import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
//import ReviewCard from "./ReviewCard"

function ReviewPage(props) {

    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/trailers/${id}`)
        .then(r => r.json())
        .then((singleTrailerData) => setSingleTrailerState(singleTrailerData) )
    },[])
    const [singleTrailerState, setSingleTrailerState] = useState({})
//console.log(singleTrailerState.reviews)
    //  const mappedReviews = singleTrailerState["reviews"].map((review) => {
    //     return <ReviewCard reviews={singleTrailerState}/>
    //  })

    return(
        <div>
            <h1>Reviews for: {singleTrailerState.name}</h1>
            <img src={singleTrailerState.image}></img>
            <ul>
                {singleTrailerState.reviews.map(()=>{})}
            </ul>
        </div>
    )
}



export default ReviewPage