import React, {useState} from 'react';
import './App.css';

import UpperBar from './components/UpperBar'
import SideBar from './components/SideBar';
import ProfilePopup from './components/ProfilePopup';

import Product from './components/Product';

function App () {

  const [mountProfilePopup, setMountProfilePopup] = useState(false);
  const profilePopupRef: React.RefObject<HTMLDivElement> = React.useRef(null);

  return (
    <div className="App">
      <UpperBar toggleProfilePopup={toggleProfilePopup} />
      <SideBar />
      <div ref={profilePopupRef}>
        <ProfilePopup mounted={mountProfilePopup}/>
      </div>
      <div className="products-container">
        <Product />
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
