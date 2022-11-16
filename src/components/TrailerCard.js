import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function TrailerCard({ trailers }) {

    const [showReview, setShowReview] = useState(false)

    function handleClick() {
        console.log('Clicked')
        setShowReview(!showReview)
    }
    
    return (
        <Card className='trailer-card' style={{  cursor: 'pointer', width: '18rem' }} onClick={handleClick}>
            <img variant="top" src={trailers.image} height='200px' width='225px'/>
            <h2>{trailers.name}</h2>
            {showReview ? <p>Review: {trailers.review}</p> : ''}
            <ListGroup.Item>Price: {trailers.for_sale ? "$" + trailers.price : "Not For Sale"}</ListGroup.Item>
            <ListGroup.Item className='location'>{trailers.location}</ListGroup.Item>
        </Card>
    )
}

export default TrailerCard;