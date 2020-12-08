import React from "react";
import ReactDOM from "react-dom";
import "./comments.scss";
import moment from "moment";
import UserInfo from "./UserInfo.jsx";

const formatDate = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.user}/>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;