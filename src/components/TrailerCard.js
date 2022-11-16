import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function TrailerCard({ trailers, handleDelete  }) {
    // function handleDelete(id) {
    //     const trailersminusOne = trailers.filter((trailer) => trailer.id === !id)
        
    //     const configObj = {
    //         method:"DELETE",
    //         headers: {"content-type": "application/json"}
    //     }
    //   fetch(`http://localhost:3001/trailers/${id}`, configObj)
    //   .then(
    //     setTrailers(trailersminusOne)
    //   )
    // }

    const [showReview, setShowReview] = useState(false)

    const id = trailers.id

    
    function handleClick() {
        console.log('Clicked')
        setShowReview(!showReview)
    }
    
    return (
        <li className='card-item'>
            <div className='trailer-card' style={{  cursor: 'pointer', width: '18rem' }} >
                <img onClick={handleClick} className='card-image' variant="top" src={trailers.image} height='200px' width='225px'/>
                <h2>{trailers.name}</h2>
                {showReview ? <p>Review: {trailers.review}</p> : ''}
                <ListGroup.Item>Price: {trailers.for_sale ? "$" + trailers.price : "Not For Sale"}</ListGroup.Item>
                <ListGroup.Item className='location'>{trailers.location}</ListGroup.Item>
                <ListGroup.Item>
                        <button onClick={() => {handleDelete(id)}}>Delete Post</button>

                </ListGroup.Item>
            </div>
        </li>
    )
}

export default TrailerCard;