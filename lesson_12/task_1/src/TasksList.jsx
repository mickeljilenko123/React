import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const baseUrl = "https://crudcrud.com/api/82237dd509164ec1a3eec6c1de59589e/tasks";

class TasksList extends Component {
    state = {
        tasks: [],
    };
    componentDidUpdate() {
        this.fetchTasksLit();
    }
    fetchTasksList = () => {
// Делаем get запрос Получаем массим всех ел.
             fetch(baseUrl).then(res => {
                 if (res.ok) {
                     return res.json();
                 }
             }).then(tasksList => {
                 const tasks = tasksList.map(({ _id, ...task }) => ({
                     id: _id,
                     ...task
                 }));
                 this.setState({
                     tasks,
                 })
             })

          }
    onCreate = (text) => {
        //Мы достаем наш таскс из состояния
        const { tasks } = this.state
      const newTask = {
          text,
          done: false,
          id: Math.random(),
      } 
      // Отправляем наши данные на сервер
      fetch (baseUrl, {
          method: "POST",
          headers: {
              'Content-Type': 'aplication/json;utc-8',
          },
          body: JSON.stringify(newTask),
      })
      // Проверяем успешно или не успешно они записались на сервер
      .then(response => {
          if (response.ok) {
              this.fetchTasksList();
          } else {
            throw new Error ('Failed to created task') 
          }
      });
      const updatedTasks = tasks.concat(newTask);
      this.setState({tasks: updatedTasks});
    }
    handleTaskStatusChange = (id) => {
        // 1. Найти задачу в списке
        // 2. Переключить значение
        // 3. Сохранить изменения в листе
        // 4. Запросить обновленный список задач


        const { done, text } = this.state.tasks.find(task => task.id === id);
        const updatedTask = {
            text,
            done: !done
        }
        fetch (`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'aplication/json;utc-8',
            },
            body: JSON.stringify(updatedTask),
        })
        // Проверяем успешно или не успешно они записались на сервер
        .then(response => {
            if (response.ok) {
                this.fetchTasksList();
            } else {
              throw new Error ('Failed to created task') 
            }
        });
        
        
        // {
        //     if (task.id === id) {
        //         return {
        //             ...task,
        //             done: !task.done
        //         };
        //     }
        //     return task;
        // })
        // this.setState({tasks: updatedTasks});
    }
    handleTaskDelete = (id) => {
        // 1. Filter tasks
        // 2. updates state
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE"
        }).then(response => {
            if (response.ok) {
                this.fetchTasksLit();
            } else {
              throw new Error ('Failed to created task') 
            }
        })
    }
    render() {
        const sortedList = this.state.tasks
        .slice()
        .sort((a, b) => a.done - b.done );
        return (
            <div className="todo-list">
                <CreateTaskInput onCreate = {this.onCreate}/>
               <ul className="list">
                  {sortedList.map(task => (
                      <Task key ={task.id} {...task}
                      onChange={this.handleTaskStatusChange}
                      onDelete = {this.handleTaskDelete}
                      />
                    ))}             
                </ul>
            </div>
        );
    }
}
export default TasksList;