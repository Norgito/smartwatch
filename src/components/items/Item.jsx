import React from 'react'
import './styleItem.css';

const Item = ({prod}) => {
    return (
        <div key={prod.id} className='card'>
            <div className="card_img">
            <img src={prod.image} alt={prod.product_name} />
            </div>
            <div className="card_header">
                <h2>{prod.product_name}</h2>
                <p>{prod.description}</p>
                <p className='price'>$ {prod.price}</p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    )
}

export default Item