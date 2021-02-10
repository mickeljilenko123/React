import React from "react";

class User extends React.Component {

  state = {
     avatar: null,
     name: null,
     location: null,
  }
  componentDidMount() {
    this.getUserData(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps) {
    const curUserId = this.props.match.params.userId;
    if(prevProps.match.params.userId != curUserId) {
      this.getUserData(curUserId)
    }
  }

  getUserData = userId => {
     fetch(`https://api.github.com/users/${userId}`)
     .then(response => response.json())
     .then(userData => {
       const {avatar_url, name, location } = userData;
       this.setState({
         avatar: null,
         name: null,
         location: null,
       })
     })
  }

  render() {
    const { avatar, name, location } = this.state
    if (!avatar || !name || !location) {
      return null;
    }
    return (
      <div class="user">
        <img alt="User Avatar" 
           src={avatar} 
           class="user__avatar"
        />
        <div class="user__info">
          <span class="user__name">{name}</span>
          <span class="user__location">{location}</span>
        </div>
      </div>
    );
  }
}


export default User;