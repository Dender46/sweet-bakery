import React from 'react';
import './Product.css';

function Product( props : {image: String, title:String} ) {
    return (
        <div className="Product">
            <img className="prod-image" alt="" src={"images/cakes/" + props.image}/>
            <br />
            <h2  className="prod-title" > {props.title} </h2>
            <i className="info-button material-icons" >info_outline</i>
        </div>
    )
}

export default Product;