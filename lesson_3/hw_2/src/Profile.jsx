import React from "react";
import moment from "moment";


const Profile = (props) => {

  const date = moment(props.userData.birthDate).format("DD MMM YY");
  return(
    <>
    <div className = "profile__name">
      {props.userData.firstName} {props.userData.lastName}
    </div>
    <div className = "profile__birth">
    {`Was born ${date} in ${props.userData.birthPlace}`}
    </div>
    </>
  )
};

export default Profile