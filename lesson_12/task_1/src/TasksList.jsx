import React, { Component } from 'react'
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';

class TasksList extends Component {
    state = {
        tasks: [
            {text: "Buy milk", done: false, id: 1},
            {text: "Buy bread", done: false, id: 2},
            {text: "Buy car", done: false, id: 3},
            {text: "Buy meet", done: true, id: 4},
            {text: "Buy cigars", done: true, id: 5},
        ],
    }
    
    onCreate = text => {
        const { tasks } = this.state;
        const newTask = {
            id: Math.random(),
            text,
            done: false,
        }
        const updatedTasks = tasks.concat(newTask);
        this.setState({
            tasks: updatedTasks
        })
    }

    handleTaskStatusChange = (id) => {
        //1. Find task in a list
        //2. Toggle done value
        //3. Save updated list

        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                };
            }
            return task;
        });
        this.setState({ tasks:  updatedTasks })
    }
    handleTaskDelete = (id) => {
         const filterTask = this.state.tasks
         .filter(task => task.id !== id);
         this.setState({ tasks:  filterTask });
    }
    

    render() {
        const sortedList = this.state.tasks
        .slice()
        .sort((a, b) => a.done - b.done);
        return (
            <div className="todo-list">
                <CreateTaskInput onCreate={this.onCreate}/>
                <ul className="list">
                {sortedList.map(task => (
                    <Task key={task.id}
                    //   id={task.id}
                    //   text={task.text}
                    //   done={task.done}
                    { ...task }
                    onDelete={this.handleTaskDelete}
                    onChange={this.handleTaskStatusChange}
                    />
                ))}
            </ul>
            </div>
        )
    }
    
}

export default TasksList
