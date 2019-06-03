import React from 'react';
import './UpperBar.css';
import './Avatar.css';

import 'material-design-icons/iconfont/material-icons.css';

function UpperBar(props : {toggleProfilePopup : Function}) {

  return (
    <div className="UpperBar">
      <h1 id="brand-name">Sweet Bakery</h1>

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
      <img src='images/avatar-icon.jpg' alt="Profile" className="avatar-icon" />
      <i className="down-arrow material-icons expand_more">expand_more</i>
    </div>
  );
}

export default UpperBar;