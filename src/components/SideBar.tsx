import React from 'react';
import './SideBarElement.css';
import 'material-design-icons/iconfont/material-icons.css';

const sidebarCaptions: Array<String> = [
  "Cakes",
  "Bisquites",
  "Pies",
  "Cupcakes",
  "Cookies"
];

class SideBar extends React.Component {
  style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "231px",
    height: "346.9px",
    left: "215px",
    top: "159px"
  };

  render() {
    return (
      <div className="SideBar" style={this.style}>
        {sidebarCaptions.map((caption, index) => (
          <SideBarElement caption={caption} key={index} />
        ))}
      </div>
    );
  }
}

class SideBarElement extends React.Component<{ caption: String }> {
  render() {
    return (
      <div className="SideBarElement">
        <h3 className="section-name">{this.props.caption}</h3>
        <i className="material-icons md-dark expand_more">chevron_right</i>
      </div>
    );
  }
}

export default SideBar;
