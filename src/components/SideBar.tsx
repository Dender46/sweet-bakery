import React from 'react';
import './SideBar.css';
import 'material-design-icons/iconfont/material-icons.css';

const sidebarCaptions: Array<String> = [
  "Cakes",
  "Bisquites",
  "Pies",
  "Cupcakes",
  "Cookies"
];

function SideBar() {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "231px",
    height: "346.9px",
    left: "215px",
    top: "159px"
  };

  return (
    <div className="SideBar" style={style}>
      {sidebarCaptions.map((caption, index) => (
        <SideBarElement caption={caption} key={index} />
      ))}
    </div>
  );
}

function SideBarElement (props : { caption : String }) {
  return (
    <div className="SideBarElement">
      <h3 className="section-name">{props.caption}</h3>
      <i className="material-icons md-dark expand_more">chevron_right</i>
    </div>
  );
}

export default SideBar;
