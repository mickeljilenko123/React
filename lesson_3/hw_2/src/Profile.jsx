import React from "react";
import moment from "moment";


const Profile = (props) => {

  const date = moment(props.userData.birthDate).format("DD MMM YY");
  return(
    <>
    <div className = "profile__name">
      <span>{props.userData.firstName} {props.userData.lastName}</span>
    </div>
    <div className = "profile__birth">
    <span>{` Was born ${date} in ${props.userData.birthPlace}`}</span>
    </div>
    </>
  )
};

export default Profile