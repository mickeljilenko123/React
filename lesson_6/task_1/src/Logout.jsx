import React from "react";

const Logout= ({ onLogout }) => {
    console.log(onLogout);
    return (
        <button className="loginOut btn" onClick={onLogout}>
            loginOut
        </button>
    );
};

export default Logout;