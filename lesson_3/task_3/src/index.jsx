import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment.jsx";
import "./comments.scss";
import "./styles.scss";


const rootElement = document.querySelector('#root');

const author = {
    name: "Tolik"
}

ReactDOM.render(
<Comment 
    user={author}
    text="Good job!!!"
    date={new Date()}
/>, 
rootElement);