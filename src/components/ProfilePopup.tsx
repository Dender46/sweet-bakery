import React, {useState, useEffect} from 'react';
import './ProfilePopup.css';

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
            <h1 className="profile-name">{props.profileName}</h1>
        </div>
    );
}

export default ProfilePopup;