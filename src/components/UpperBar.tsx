import React from 'react';
import './UpperBar.css';

import Avatar from './Avatar';

type UpperBarProps = {
  toggleProfilePopup: Function
}

class UpperBar extends React.Component<UpperBarProps> {
  render() {
    return (
      <div className="UpperBar">
        <h1 id="brand-name">Sweet Bakery</h1>

        <div id="bg-drip-left"></div>
        <div id="bg-drip-right"></div>
        <Avatar toggleProfilePopup={this.props.toggleProfilePopup}/>
      </div>
    );
  }
}

export default UpperBar;