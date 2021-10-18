import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div id="products" className="container">
            <div className="row products-container">
                <h1 className="heading mb-5">Products</h1>
            {
                products.map(product => <Product
                key={product.id}
                product = {product}
                ></Product> )
            }
        </div>
        </div>
    );
};

export default Products;