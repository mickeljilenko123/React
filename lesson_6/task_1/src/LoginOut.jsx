import React from "react";

const LoginOut = ({ onLoginOut }) => {
    console.log(onLoginOut);
    return (
        <button className="loginOut btn" onClick={onLoginOut}>
            loginOut
        </button>
    );
};

export default LoginOut;