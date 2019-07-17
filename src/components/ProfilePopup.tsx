import React, {useState, useEffect} from 'react';
import './ProfilePopup.css';

const profilePopupElements : Array<{icon : String, caption : String}> = [
    {icon: "shopping_cart",             caption: "Cart"},
    {icon: "settings",                  caption: "Preferences"},
    {icon: "subdirectory_arrow_right",  caption: "Sign Out"},
    {icon: "help_outline",              caption: "Help"}
]

function ProfilePopup(props : {mounted : boolean, profileName : String}) : any {
    const [opacity, setOpacity] = useState(0);
    const [show, setShow] = useState(false);

    useEffect( () => {
        if (props.mounted)
            setShow(true);
        setTimeout( () => setOpacity(props.mounted ? 1 : 0), 30);
        return () => {
            setOpacity(0);
        }
    }, [props.mounted]);

    return (
        show && 
        <div
            className="ProfilePopup"
            style={{opacity: opacity}}
            onTransitionEnd={ () => setShow(props.mounted)}
        >
            <img src={require('../images/avatar-icon.jpg')} alt="Profile" className="profile-icon noselect" />
            <h1 className="profile-name">{props.profileName}</h1>
            <div className="profile-elements">
                {profilePopupElements.map((props) => ( <ProfilePopupElement icon={props.icon} caption={props.caption} /> ))}
            </div>
        </div>
    );
}

function ProfilePopupElement(props : {icon : String, caption : String}) {
    return (
        <div className="ProfilePopupElement">
            <i className="icon material-icons noselect">{props.icon}</i>
            <h3 className="caption noselect">{props.caption}</h3>
        </div>
    )
}

export default ProfilePopup;