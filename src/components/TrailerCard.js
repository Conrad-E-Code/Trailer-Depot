import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import {Link} from "react-router-dom"

function TrailerCard({ trailers, handleDelete, increment  }) {

    const [showReview, setShowReview] = useState(false)

    const id = trailers.id
    
    function handleClick() {
        console.log('Clicked')
        setShowReview(!showReview)
    }
    
    return (
        <li className='card-item'>
            <div className='trailer-card' style={{  cursor: 'pointer', width: '18rem' }}>
                <img onClick={handleClick} className='card-image' variant="top" src={trailers.image} height='200px' width='225px' title='Click To View Desciption'/>
                <h2 className='card-name'>{trailers.name}</h2>
                {showReview ? <p className='card-description'>Description: {trailers.description}</p> : ''}
                
                {trailers.for_sale ? <ListGroup.Item className='card-price'>Cash Price: ${trailers.price} </ListGroup.Item> : null}
                {trailers.for_rent ? <ListGroup.Item className='card-price'>Daily Rate: ${trailers.rate} </ListGroup.Item> : null}
                {/* <ListGroup.Item className='card-price'>Price: {trailers.for_sale ? "$" + trailers.price : "Not For Sale"}</ListGroup.Item> */}
                <ListGroup.Item className='location'>{trailers.location}</ListGroup.Item>
                <ListGroup.Item className='add-to-cart'><button style={{ cursor: 'pointer', backgroundColor: 'whitesmoke'}} onClick={increment}>Add To Cart</button></ListGroup.Item>
                <ListGroup.Item className='delete-button'>
                        <button onClick={() => {handleDelete(id)}} style={{ cursor: 'pointer', backgroundColor: 'whitesmoke' }}>Delete Post</button>
                 {/* <Link to={`/trailers/${id}/details`}><button>Details</button></Link> */}
                </ListGroup.Item>
            </div>
        </li>
    )
}

export default TrailerCard;