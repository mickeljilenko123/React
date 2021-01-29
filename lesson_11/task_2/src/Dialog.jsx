import React from "react";
import PropTypes from "prop-types"


const Dialog = ({ children, title, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  };

  return (
     <div className="dialog">
       <div className="dialog__hending">
         <div className="dialog__title">{title}</div>
         <button className="dialog__close-btn" onClick = {onClose}>+</button>
       </div>
       <div className="dialog__contant">{children}</div>
       </div>
  );
}
Dialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired
}

Dialog.propTypes = {
  isOpen: false,
  title: ''
}



export default Dialog;