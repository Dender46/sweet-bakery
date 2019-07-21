import React from 'react';
import './Product.css';

function Product( props : {image: String, title:String} ) : any {
    return (
        <div className="Product">
            <img className="prod-image noselect" alt="" src={require("../images/cakes/" + props.image)}/>
            <br />
            <h2  className="prod-title" > {props.title} </h2>
            <i className="info-button material-icons noselect" >add_circle_outline</i>
            {
                <div className="prod-overlay">
                    
                </div>
            }
        </div>
    )
}

export default Product;