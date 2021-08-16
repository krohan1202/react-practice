import React from 'react';
import {useSelector} from "react-redux"; //useSelector hook is used for accessing values over states

function Profile() {
    const user = useSelector(state => state.user.value);
    const themeColor = useSelector(state => state.theme.value);
    // console.log(themeColor);
    return (
        <div style={{color: themeColor}}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Email: {user.email}</h1>
        </div>
    );
}

export default Profile;