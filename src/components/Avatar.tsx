import React from 'react';
import './Avatar.css';

import 'material-design-icons/iconfont/material-icons.css';
import avatar from '../images/avatar-icon.jpg';

type AvatarProps = {
  toggleProfilePopup: Function
}

class Avatar extends React.Component<AvatarProps> {
  render() {
    return (
      <div className="Avatar" onClick={() => this.props.toggleProfilePopup()}>
        <img src={avatar} alt="Profile" className="avatar-icon" />
        <i className="down-arrow material-icons expand_more">expand_more</i>
      </div>
    );
  }
}

export default Avatar;