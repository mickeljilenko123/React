import React from "react"
import TodoItems from './TodoItems.jsx'

function App() {
    return (
        <div className="todo-list">
            <TodoItems />
            <TodoItems />
            <TodoItems />
            <TodoItems />
        </div>
    )
}

export default App