import React, {useState} from 'react';
import './App.css';

import UpperBar from './components/UpperBar'
import SideBar from './components/SideBar';
import ProfilePopup from './components/ProfilePopup';

import Product from './components/Product';

function App () {

  const [mountProfilePopup, setMountProfilePopup] = useState(false);
  const profilePopupRef: React.RefObject<HTMLDivElement> = React.useRef(null);

  var productsInfo: Array<{image: String, title : String}> = [
    {image: 'cake0.jpg', title: 'Prod. name'},
    {image: 'cake1.jpg', title: 'Prod. name'},
    {image: 'cake2.jpg', title: 'Prod. name'},
    {image: 'cake3.jpg', title: 'Prod. name'}
  ];

  productsInfo = productsInfo.concat(productsInfo).concat(productsInfo);

  return (
    <div className="App">
      <UpperBar toggleProfilePopup={toggleProfilePopup} />
      <SideBar />
      <div ref={profilePopupRef}>
        <ProfilePopup mounted={mountProfilePopup} profileName="Dmitry Bagandov"/>
      </div>
      <div className="products-container">
        {productsInfo.map((props, index) => ( <Product key={index} image={props.image} title={props.title} /> ))}
      </div>
    </div>
  );

  function toggleProfilePopup(e: Event) {
    // close ProfilePopup:
    if (e && e.target && profilePopupRef.current && !profilePopupRef.current.contains(e.target as HTMLDivElement)) {
      document.removeEventListener('mousedown', toggleProfilePopup);
      setMountProfilePopup(false);
      return;
    };

    // Open ProfilePopup:
    if (mountProfilePopup === true)
      return;

    document.addEventListener('mousedown', toggleProfilePopup);
    setMountProfilePopup(true);
  }
}

export default App;
