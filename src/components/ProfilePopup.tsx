import React from 'react';
import './ProfilePopup.css';

type ProfilePopupProps = {
  mounted: boolean
}

type ProfilePopupState = {
  show: boolean,
  style: {
    opacity:    number
  }
}

class ProfilePopup extends React.Component<ProfilePopupProps, ProfilePopupState> {
  constructor(props: ProfilePopupProps) {
    super(props);
    this.state = {
      show: false,
      style: {
        opacity: 0
      }
    };
  }

  render() {
    return (
      this.state.show && <div 
        className="ProfilePopup"
        style={this.state.style}
        onTransitionEnd={this.transitionEnd}
      >
  
      </div>
    );
  }

  mountStyle = () => {
    if (!this.props.mounted)
      return;
    
    this.setState({
      style: {
        opacity: 1
      }
    })
  }

  unMountStyle = () => {
    this.setState({
      style: {
        opacity: 0
      }
    })
  }

  componentDidMount = () => {
    setTimeout(this.mountStyle, 10);
  }

  componentWillReceiveProps(newProps:ProfilePopupProps) {
    if (!newProps.mounted)
      return this.unMountStyle();

    this.setState({
      show: true
    });
    setTimeout(this.mountStyle, 10);
  }

  transitionEnd = () => {
    if(!this.props.mounted){ // remove the node on transition end when the mounted prop is false
      this.setState({
        show: false
      })
    }
  }

}

export default ProfilePopup;
