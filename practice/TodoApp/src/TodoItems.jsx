import React from 'react'

const TodoItems = (props) => {
  return(
      <div className = "todo-item">
        <input 
           type="checkbox" 
           checked={props.item.completed}
           onChange = {(event) => props.handleChange(props.item.id)}
        />
        <p>{props.item.text}</p>
      </div>

  )
}

export default TodoItems