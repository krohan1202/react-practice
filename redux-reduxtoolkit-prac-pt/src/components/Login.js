import React from 'react';
import {useDispatch} from "react-redux"; //useDispatch hook is used to modify values over states
import {login, logout} from "../features/user"; 

function Login() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {
                dispatch(login({ name: "Rohan", age: 19, email: "rohan@gmail.com"}))
            }}>
            Login</button>

            <button onClick={() => {
                dispatch(logout());
            }}>Logout</button>
        </div>
    );
}

export default Login;