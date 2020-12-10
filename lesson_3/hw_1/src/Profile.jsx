import React from "react";


const Profile = (props) => {

  return (
    <div className="profile">
      <div className="profile__name">
        <span>{`${props.userData.firstName} ${props.userData.lastName}`}</span>
      </div>
      <span className="profile__birth">{`Was born ${date} in ${props.userData.birthPlace}`}</span>
    </div>
  );
};

export default Profile