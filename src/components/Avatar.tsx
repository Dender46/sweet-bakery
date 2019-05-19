import React from 'react';
import './Avatar.css';

import 'material-design-icons/iconfont/material-icons.css';

const Avatar: React.FC = () => {
  return (
    <div className="Avatar">
      <div className="avatar-icon"></div>
      <i className="material-icons md-dark expand_more">expand_more</i>
    </div>
  );
}

export default Avatar;