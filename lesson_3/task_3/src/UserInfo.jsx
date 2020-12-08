import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./Avatar.jsx";
import "./userinfo.scss";

const UserInfo = (props) => {
   return (
    <div className="user-info">
    <Avatar 
    avatarUrl = {props.user.avatarUrl}
    name = {props.user.name}
    />
    <div className="user-info__name">{props.user.name}</div>
  </div>
   )
}
export default UserInfo;