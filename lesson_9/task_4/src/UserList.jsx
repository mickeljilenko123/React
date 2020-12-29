import React from "react";
import User from "./User";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {
  state = {
    name: "",
  };

  //передаём данные из инпута в UsersList
  onChange = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };


  render() {
    return (
      <div>
        <Filter
          filterText={this.state.name}
          onChange={this.onChange}
          count={usersList.length}
        />
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UsersList;