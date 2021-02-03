import React from "react"
import TodoItems from './TodoItems.jsx'
import todosData from './todosData'

// function App() {
//     const todoComponents = todosData.map(item => {
//         return(
//             <TodoItems key={item.id} item={item}/>
//         )
//     })
//     return (
//         <div className="todo-list">
//           {todoComponents}
//         </div>
//     )
// }

// export default App


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoComponents = this.state.todos.map(item => {
            return(
                <TodoItems key={item.id} item={item} handleChange={this.handleChange}/>
            )
        })
        return (
            <div className="todo-list">
              {todoComponents}
            </div>
        )
    }
}

export default App