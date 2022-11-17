import { BsCart4 } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'
import React, { useState } from 'react';

function ShoppingCart({ count }) {

    return (
        <div className="shopping-cart">
            <h3><BsBag className="cart-logo"/>
            <p className='item-count'>Items: { count }</p>
            </h3>
        </div>
    )
}

export default ShoppingCart;