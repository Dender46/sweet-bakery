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
    position: "absolute",
    height: "346.9px",
    left: "9.79%",
    right: "75.78%",
    top: "159px",

    minWidth: "155px"
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
      <h3 className="section-name noselect">{props.caption}</h3>
      <i className="material-icons md-dark expand_more noselect">chevron_right</i>
    </div>
  );
}

export default SideBar;
