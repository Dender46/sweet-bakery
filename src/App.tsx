import React from 'react';
import './App.css';

import UpperBar from './components/UpperBar'
import SideBar from './components/SideBar';
import ProfilePopup from './components/ProfilePopup';

import Product from './components/Product';

class App extends React.Component<{}, {mountProfilePopup: boolean}> {

  private profilePopupRef: React.RefObject<HTMLDivElement>;

  constructor(props: Object) {
    super(props);
    this.state = {
      mountProfilePopup: false
    }
    this.profilePopupRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <UpperBar toggleProfilePopup={this.toggleProfilePopup} />
        <SideBar />
        <div ref={this.profilePopupRef}>
          <ProfilePopup mounted={this.state.mountProfilePopup} />
        </div>
        <div className="products-container">
          <Product />
        </div>
      </div>
    );
  }

  toggleProfilePopup = (e: Event) => {
    // close ProfilePopup:
    if (e && e.target && this.profilePopupRef.current && !this.profilePopupRef.current.contains(e.target as HTMLDivElement)) {
      document.removeEventListener('mousedown', this.toggleProfilePopup);
      this.setState({
        mountProfilePopup: false
      });
      return;
    };

    // Open ProfilePopup:
    if (this.state.mountProfilePopup === true)
      return;

    document.addEventListener('mousedown', this.toggleProfilePopup);
    this.setState({
      mountProfilePopup: true
    });
  }
}

export default App;
