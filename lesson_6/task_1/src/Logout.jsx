import React from "react";

const Logout= ({ onLogout }) => {
    console.log(onLogout);
    return (
        <button className="logout btn" onClick={onLogout}>
            logout
        </button>
    );
};

export default Logout;