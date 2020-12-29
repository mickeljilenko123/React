import React from 'react';

const User = ({ name, age }) => {
    return(
        <ul class="users">
    <li class="user"><span class="user__name">{name}</span><span class="user__age">{age}</span></li>
    <li class="user"><span class="user__name">{name}</span><span class="user__age">{age}</span></li>
  </ul>
    )
}
export default User;