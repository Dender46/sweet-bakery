import React from 'react';
import './UpperBar.css';

const UpperBar: React.FC = () => {
  return (
    <div className="UpperBar">
      <h1 id="brand-name">Sweet Bakery</h1>

      <div id="bg-drip-left"></div>
      <div id="bg-drip-right"></div>
    </div>
  );
}

export default UpperBar;