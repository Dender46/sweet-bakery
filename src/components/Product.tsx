import React from 'react';

const style : React.CSSProperties = {
    position: 'relative',
    width: '250px',
    height: '350px',

    boxShadow: '2px 4px 12px rgba(95, 17, 31, 0.15)',
    background: '#FFFFFF',
    borderRadius: '16px'
}

function Product() {
    return (
        <div className="MainItem" style={style}>
            <img    className="prod-image" />
            <h2     className="prod-title" > Product name </h2>
            <i className="info-button material-icons" >info</i>
        </div>
    )
}

export default Product;