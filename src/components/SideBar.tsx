import React from 'react';
import './SideBar.css';

import SideBarElement from './SideBarElement';

const sidebarCaptions : Array<String> = [
  'Cakes', 'Bisquites', 'Pies', 'Cupcakes', 'Cookies'
];

class SideBar extends React.Component {
  render() {
    return(
      <div className="SideBar">
        {sidebarCaptions.map((caption, index) => 
          <SideBarElement caption={caption} key={index}/> 
        )}
      </div>
    );
  }
}

export default SideBar;