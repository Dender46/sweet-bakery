import React from 'react';
import './App.css';

import UpperBar from './components/UpperBar'
import ProfilePopup from './components/ProfilePopup';

type AppState = {
  profilePopupVisible: number
}

class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      profilePopupVisible: 0
    }
    this.toggleProfilePopup = this.toggleProfilePopup.bind(this);
  }

  render() {
    return (
      <div className="App">
        <UpperBar toggleProfilePopup={this.toggleProfilePopup}/>
        <ProfilePopup opacity={this.state.profilePopupVisible}/>
      </div>
    );
  }

  toggleProfilePopup = (e: Event) => {
    this.setState({
      profilePopupVisible: this.state.profilePopupVisible == 0 ? 100 : 0
    })
  }
}

export default App;
