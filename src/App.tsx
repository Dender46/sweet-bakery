import React from 'react';
import './App.css';

import UpperBar from './components/UpperBar'
import ProfilePopup from './components/ProfilePopup';

type AppState = {
  profilePopupOpacity: number
}

class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      profilePopupOpacity: 0
    }
    this.toggleProfilePopup = this.toggleProfilePopup.bind(this);
  }

  render() {
    return (
      <div className="App">
        <UpperBar toggleProfilePopup={this.toggleProfilePopup}/>
        <ProfilePopup opacity={this.state.profilePopupOpacity}/>
      </div>
    );
  }

  toggleProfilePopup = (e: Event) => {
    this.setState({
      profilePopupOpacity: this.state.profilePopupOpacity == 0 ? 100 : 0
    });
  }
}

export default App;
