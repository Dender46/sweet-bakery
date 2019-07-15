import React from 'react';
import './UpperBar.css';
import './Avatar.css';

function UpperBar(props : {toggleProfilePopup : Function}) {

  return (
    <div className="UpperBar">
      <h1 className="noselect" id="brand-name">Sweet Bakery</h1>

      <div className="bg-drips">
        <div id="bg-drip-left"></div>
        <div id="bg-drip-right"></div>
      </div>
      <Avatar toggleProfilePopup={props.toggleProfilePopup} />
    </div>
  );
}

function Avatar (props : { toggleProfilePopup: Function }) {
  return (
    <div className="Avatar" onClick={() => props.toggleProfilePopup()}>
      <img src={require('../images/avatar-icon.jpg')} alt="Profile" className="avatar-icon noselect" />
      <i className="down-arrow material-icons expand_more noselect">expand_more</i>
    </div>
  );
}

export default UpperBar;