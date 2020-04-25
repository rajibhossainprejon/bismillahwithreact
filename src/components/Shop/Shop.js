import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Products from '../Products/Products';
import './Shop.css'
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const [cart,setCart]=useState([]);
    const addproduct=(selectedProduct)=>{
        
        const newCart=[...cart,selectedProduct];
        setCart(newCart);
    }
    return (
        <div className="shop">
            <div className="product-container">
               

                {
                    products.map(pd => <Products addproduct={addproduct} products={pd}></Products>)
                }

            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;