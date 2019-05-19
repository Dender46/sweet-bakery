import React from 'react';
import './Avatar.css';

import 'material-design-icons/iconfont/material-icons.css';
import avatar from '../images/avatar-icon.jpg';

const Avatar: React.FC = () => {
  return (
    <div className="Avatar">
      <img src={avatar} alt="Profile" className="avatar-icon" />
      <i className="material-icons md-dark expand_more">expand_more</i>
    </div>
  );
}

export default Avatar;