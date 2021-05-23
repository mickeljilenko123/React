import React from 'react'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <span class="status">{isOnline  === true ? "online" : "offline" }</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </div>
    )
}

export default FriendListItem;
