import React from 'react';
import './ProfilePopup.css';

type ProfilePopupProps = {
  opacity: number
}

class ProfilePopup extends React.Component<ProfilePopupProps> {
  render() {
    return (
      <div className="ProfilePopup" style={{opacity: this.props.opacity}}>
  
      </div>
    );
  }
}

export default ProfilePopup;
