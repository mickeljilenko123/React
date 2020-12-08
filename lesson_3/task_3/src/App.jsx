import React from "react";
import Comment from "./Comment";

const user = {
  name: "Mikhailo",
  avatarUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
};

const App = () => {
  return (
    <Comment
      author={user}
      text="Good job!"
      date={new Date("2020-01-01T05:01:01.566Z")}
    />
  );
};

export default App;