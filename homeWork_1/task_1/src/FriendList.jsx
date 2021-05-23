import React from 'react';
import FriendListItem from './FriendListItem';
import { ul } from '@material-ui/core';


function FriendList({ friends }) {
    return (
            <ul color="primary">
                {friends.map(friend => (
                    <li className="item" key={friend.id}>
                        <FriendListItem 
                          avatar={friend.avatar}
                          name={friend.name}
                          isOnline={friend.isOnline}
                        />
                         {/* <span className="status">{friend.isOnline === true ? "online" : "offline"}</span>
                         <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                         <p className="name">{friend.name}</p> */}
                    </li>
                ))}
            </ul>
    )
}

export default FriendList;
