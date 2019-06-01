import React from 'react';
import './UpperBar.css';
import './Avatar.css';

import 'material-design-icons/iconfont/material-icons.css';

class UpperBar extends React.Component<{ toggleProfilePopup: Function }> {
  render() {
    return (
      <div className="UpperBar">
        <h1 id="brand-name">Sweet Bakery</h1>

        <div className="bg-drips">
          <div id="bg-drip-left"></div>
          <div id="bg-drip-right"></div>
        </div>
        <Avatar toggleProfilePopup={this.props.toggleProfilePopup} />
      </div>
    );
  }

}

class Avatar extends React.Component<{ toggleProfilePopup: Function }> {
  render() {
    return (
      <div className="Avatar" onClick={() => this.props.toggleProfilePopup()}>
        <img src='images/avatar-icon.jpg' alt="Profile" className="avatar-icon" />
        <i className="down-arrow material-icons expand_more">expand_more</i>
      </div>
    );
  }
}

export default UpperBar;