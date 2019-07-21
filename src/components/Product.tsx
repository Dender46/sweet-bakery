import React, { useState } from 'react';
import './Product.css';

function Product( props : {image: String, title:String} ) : any {
    const [overlayOpacity, setOverlayOpacity] = useState(0);

    return (
        <div className="Product" onMouseOver={() =>setOverlayOpacity(1)} onMouseLeave={() =>setOverlayOpacity(0)}>
            <img className="prod-image noselect" alt="" src={require("../images/cakes/" + props.image)}/>
            <br />
            <h2  className="prod-title" > {props.title} </h2>
            <i className="info-button material-icons noselect" >add_circle_outline</i>
            
            <div style={{opacity: overlayOpacity}} className="prod-overlay">
                
            </div>
        </div>
    )
}

export default Product;