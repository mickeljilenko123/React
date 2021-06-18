// import React from 'react';

// const FriendListItem = ({avatar, name, isOnline}) => {
//    return(
//     <li>
//      <span className="status">{isOnline === true ? "online" : "offline"}</span>
//       <img className="avatar" src={avatar} alt={name} width="48" />
//       <p className="name">{name}</p>
//     </li>
//    )
// }
// export default FrinedListItem;

// let value = 0 && 'test'; 
// console.log(value);

const Page = ({data}) => {
    const data = [
        {
            id: 1,
            name: 'Category 1'
        },
        {
            id: 2,
            name: 'Category 2'
        },
        {
            id: 2,
            name: 'Category 3'
        },
    ];
    const send = function (id) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `/api/category/${id}`);
        xhr.send();

        xhr.onload = function() {
            // xhr.responseText - [{"id":1,"name":"Subcategory 1"},{"id":2,"name":"Subcategory 2"},{"id":2,"name":"Subcategory 3"}]
        };

    }

    return (
        <ul>
            {
                data.map((category) => (
                    <li key={category.id}>
                        {category.name}
                    </li>
                ))
            }
        </ul>
    )
}
