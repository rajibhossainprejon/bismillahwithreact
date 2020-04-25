import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './Products.css'
const Products = (props) => {
    
    const { img, name, seller, price, stock } = props.products;

    return (
        <div className="products">
            <div>
                <img src={img} alt="Internet Unvailable" />
               
            </div>
            <div className="data">
                <h4 className="productname">{name}</h4>
                <br />
                <small>by: {seller}</small>
                <p>Price: ${price}</p>
                <small>Only {stock} more left</small>
                <br/>
                <button onClick={()=>props.addproduct(props.products)} id="add-cart"><FontAwesomeIcon icon={faCartPlus} />&nbsp;&nbsp;&nbsp; Add to cart</button>

            </div>
        </div>
    );
};

export default Products;