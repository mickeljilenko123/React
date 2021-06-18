import React, { Component } from 'react'
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';

const baseUrl = "https://crudcrud.com/api/f944e2c060994c818155bdf5caa31974/tasks";

class TasksList extends Component {
    state = {
        tasks: [],
    }
    componentDidMount() {
        this.fetchTasksList();
    }
    fetchTasksList = () => {
        fetch(baseUrl).then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(tasksList => {
            const tasks = tasksList.map(({ _id, ...task }) => ({
                id: _id,
                ...task
            }))
             this.setState({
                tasks
             })
        })
    }
    
    onCreate = text => {
        // + 1. Create task object
        //2. Post object to server
        //3. Fetch list from server
        // const { tasks } = this.state;
        const newTask = {
            
            text,
            done: false,
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;utc-8'
            },
            body: JSON.stringify(newTask),
        }).then(response => {
            if (response.ok) {
                this.fetchTasksList()
            } else {
                throw new Error('Failed to create task');
            }
            
        })

        // const updatedTasks = tasks.concat(newTask);
        // this.setState({
        //     tasks: updatedTasks
        // })
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
         fetch(`${baseUrl}/${id}`, {
             method: 'DELETE' 
         }).then(response => {
             if(response.ok) {
                 this.fetchTasksList();
             } else {
                throw new Error('Failed to delete task');
             }
         })
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