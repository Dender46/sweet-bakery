import React, { useState } from 'react';
import './Product.css';

function Product( props : {image: String, title:String} ) : any {
    const [overlay, setOverlay] = useState(false);

    function checkOverlay(e : React.MouseEvent<HTMLDivElement, MouseEvent>, show : boolean) {
        if (!show && (e.target as HTMLDivElement).className === 'prod-overlay'){
            console.log('hello');
            
            return;
        }
        setOverlay(show);
    }

    return (
        <div className="Product" onMouseOver={(e) => checkOverlay(e, true)} onMouseOut={(e) => checkOverlay(e, false)}>
            <img className="prod-image noselect" alt="" src={require("../images/cakes/" + props.image)}/>
            <br />
            <h2  className="prod-title" > {props.title} </h2>
            <i className="info-button material-icons noselect" >add_circle_outline</i>
            {
                overlay && <div className="prod-overlay">
                    
                </div>
            }
        </div>
    )
}

export default Product;