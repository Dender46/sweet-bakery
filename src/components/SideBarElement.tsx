import React from 'react';
import './SideBarElement.css';

import 'material-design-icons/iconfont/material-icons.css';

type Props = {
  caption : String
}

class SideBarElement extends React.Component<Props> {
  render() {
    return (
      <span className="SideBarElement">
        <h3 className="section-name">{this.props.caption}</h3>
        <i className="material-icons md-dark expand_more">chevron_right</i>
      </span>
    );
  }
}

export default SideBarElement;