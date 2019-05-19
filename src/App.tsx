import React from 'react';
import './App.css';

import UpperBar from './components/UpperBar'
import ProfilePopup from './components/ProfilePopup';

type AppState = {
  profilePopupVisible: Boolean
}

class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      profilePopupVisible: false
    }
    this.toggleProfilePopup = this.toggleProfilePopup.bind(this);
  }

  render() {
    return (
      <div className="App">
        <UpperBar toggleProfilePopup={this.toggleProfilePopup}/>
        { this.state.profilePopupVisible && <ProfilePopup /> }
      </div>
    );
  }

  toggleProfilePopup = (e: Event) => {
    this.setState({
      profilePopupVisible: !this.state.profilePopupVisible
    })
  }
}

export default App;
