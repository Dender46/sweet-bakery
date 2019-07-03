import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="Product">
            <img className="prod-image" alt="" src="images/cakes/cake0.jpg"/>
            <br />
            <h2  className="prod-title" > Product name </h2>
            <i className="info-button material-icons" >info_outline</i>
        </div>
    )
}

export default Product;