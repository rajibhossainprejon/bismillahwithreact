import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    let shipping = 0;

    if (total > 15) {
        shipping =shipping+ 10;
        
    }
    else if(total>0) {
        shipping=shipping+12.80;
    }
    let tax = (total / 10).toFixed(2);
    tax=Number(tax);
    const numberFormatting=num=>{
        num=num.toFixed(2);
        return Number(num);
    }
    return (
        <div>
            <div className="cart-container">
                <h4>Order Sammary: </h4>
                <small>Items ordered: {cart.length} </small>
                <br />
                <small>Shipping & Hardware: {shipping}</small>
                <br />
                <small>Total before tax: {numberFormatting(total + shipping)}</small>
                <br />
                <small>Estimated Tax: {numberFormatting(tax)}</small>
                <br />
                <h4>Total: {numberFormatting(total + tax + shipping)}</h4>

            </div>

        </div>
    );
};

export default Cart;