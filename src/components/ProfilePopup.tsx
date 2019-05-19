import React from 'react';
import './ProfilePopup.css';

type ProfilePopupProps = {
  opacity: number
}

class ProfilePopup extends React.Component<ProfilePopupProps, {visibility: any}> {
  constructor(props: ProfilePopupProps) {
    super(props);
    this.state = {
      visibility: 'hidden'
    };
  }
  
  render() {
    return (
      <div className="ProfilePopup"
        style={{
          opacity:    this.props.opacity,
          visibility: this.state.visibility
        }}
      >
  
      </div>
    );
  }

  componentDidUpdate(prevProps: ProfilePopupProps, visibility: any) {
    if(prevProps.opacity !== this.props.opacity) {
      if (this.props.opacity == 0)
        setTimeout(() => 
          this.setState({visibility: 'hidden'})
        , 400);
      else
        this.setState({visibility: 'visible'});
    }
  }
}

export default ProfilePopup;
