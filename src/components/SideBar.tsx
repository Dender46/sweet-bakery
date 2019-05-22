import React from 'react';
import './SideBar.css';

import SideBarElement from './SideBarElement';

class SideBar extends React.Component {
  render() {
    return(
      <div className="SideBar">
        <SideBarElement />
      </div>
    );
  }
}

export default SideBar;