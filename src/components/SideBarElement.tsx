import React from 'react';
import './SideBarElement.css';

import 'material-design-icons/iconfont/material-icons.css';

class SideBarElement extends React.Component {
  render() {
    return (
      <span className="SideBarElement">
        <h3 className="section-name">Cakes</h3>
        <i className="material-icons md-dark expand_more">chevron_right</i>
      </span>
    );
  }
}

export default SideBarElement;