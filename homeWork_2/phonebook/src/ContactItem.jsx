import React from "react";

function ContactItem( { name, number, id, onDelete } ) {
  return (
    <li className="list-item">
      <span className="list-item__text">{name}</span>
      <span className="list-item__text">{number}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
}

export default ContactItem;
