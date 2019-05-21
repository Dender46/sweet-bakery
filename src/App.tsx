import React from 'react';
import './App.css';

import UpperBar from './components/UpperBar'
import ProfilePopup from './components/ProfilePopup';

type AppState = {
  mountProfilePopup: boolean
}

class App extends React.Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      mountProfilePopup: false
    }
    this.toggleProfilePopup = this.toggleProfilePopup.bind(this);
  }

  render() {
    return (
      <div className="App">
        <UpperBar toggleProfilePopup={this.toggleProfilePopup}/>
        <ProfilePopup mounted={this.state.mountProfilePopup}/>
      </div>
    );
  }

  toggleProfilePopup = (e: Event) => {
    this.setState({
      mountProfilePopup: !this.state.mountProfilePopup
    });
  }
}

export default App;
