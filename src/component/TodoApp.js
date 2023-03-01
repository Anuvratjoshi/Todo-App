import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), text: 'Buy groceries' },
        { id: uuidv4(), text: 'Walk the dog' },
        { id: uuidv4(), text: 'Do laundry' },
    ]);
    const [newTask, setNewTask] = useState('');
    function addTask() {
        if (!newTask) return;
        setTasks([...tasks, { id: uuidv4(), text: newTask }]);
        setNewTask('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className="task-list">
                {tasks.map(task => (
                    <div className="task" key={task.id}>
                        <span className="task-text">{task.text}</span>
                        <button className="delete-button" onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Add task"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
        </div>
    );
}

export default TodoApp;
