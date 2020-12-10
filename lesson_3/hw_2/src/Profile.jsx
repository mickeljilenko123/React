import React from "react";
import moment from "moment";


const Profile = (props) => {
  const date = moment(props.birthDate).format('DD MMM YY');

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