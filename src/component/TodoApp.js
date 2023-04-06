// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// function TodoApp() {
//     const [tasks, setTasks] = useState([
//         { id: uuidv4(), text: 'Buy groceries' },
//         { id: uuidv4(), text: 'Walk the dog' },
//         { id: uuidv4(), text: 'Do laundry' },
//     ]);
//     const [newTask, setNewTask] = useState('');
//     function addTask() {
//         if (!newTask) return;
//         setTasks([...tasks, { id: uuidv4(), text: newTask }]);
//         setNewTask('');
//     }

//     function deleteTask(id) {
//         setTasks(tasks.filter(task => task.id !== id));
//     }

//     return (
//         <div className="App">
//             <h1>To-Do List</h1>
//             <div className="task-list">
//                 {tasks.map(task => (
//                     <div className="task" key={task.id}>
//                         <span className="task-text">{task.text}</span>
//                         <button className="delete-button" onClick={() => deleteTask(task.id)}>
//                             Delete
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             <div className="add-task">
//                 <input
//                     type="text"
//                     placeholder="Add task"
//                     value={newTask}
//                     onChange={e => setNewTask(e.target.value)}
//                 />
//                 <button onClick={addTask}>Add</button>
//             </div>
//         </div>
//     );
// }

// export default TodoApp;
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), text: 'Buy groceries' },
        { id: uuidv4(), text: 'Walk the dog' },
        { id: uuidv4(), text: 'Do laundry' },
    ]);
    const [newTask, setNewTask] = useState('');
    const [editedTask, setEditedTask] = useState(null);
    const [editedTaskText, setEditedTaskText] = useState('');

    function addTask() {
        if (!newTask) return;
        setTasks([...tasks, { id: uuidv4(), text: newTask }]);
        setNewTask('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function startEdit(task) {
        // console.log(task)   {id: '92bc80d2-d336-4676-aaf1-8dd7aa13db41', text: 'Buy veg'}
        setEditedTask(task.id);
        setEditedTaskText(task.text);
    }

    function cancelEdit() {
        setEditedTask(null);
        setEditedTaskText('');
    }

    function saveEdit() {
        const updatedTasks = tasks.map(task => {
            if (task.id === editedTask) {
                return { ...task, text: editedTaskText };
            }
            return task;
        });
        setTasks(updatedTasks);
        setEditedTask(null);
        setEditedTaskText('');
    }

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className="task-list">
                {tasks.map(task => (
                    <div className="task" key={task.id}>
                        {editedTask === task.id ? (//if edited task == to task.id then we will show input box
                            <>
                                <input
                                    className="edit-box"
                                    type="text"
                                    value={editedTaskText}
                                    onChange={e => setEditedTaskText(e.target.value)}
                                />
                                <button className="save-button" onClick={saveEdit}>Save</button>
                                <button className="cancel-button" onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span className="task-text">{task.text}</span>
                                <button className="edit-button" onClick={() => startEdit(task)}>
                                    Edit
                                </button>
                                <button className="delete-button" onClick={() => deleteTask(task.id)}>
                                    Delete
                                </button>
                            </>
                        )}
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



/*
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), text: 'Buy groceries' },
        { id: uuidv4(), text: 'Walk the dog' },
        { id: uuidv4(), text: 'Do laundry' },
    ]);
    const [editBox, showEditInputBox] = useState(false)
    const [editBoxText, setEditBoxText] = useState("")
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
                        {!editBox && <span className="task-text">{`${editBoxText.length ? editBoxText : task.text}`}</span>}
                        {editBox && <input onChange={e => setEditBoxText(e.target.value)} className="task-text" value={editBoxText} />}

                        {!editBox && <button className="delete-button" onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>}

                        {!editBox && <button className="Edit-button" onClick={() => {
                            showEditInputBox(true)
                        }} >Edit
                        </button>}
                        {editBox && <button className="save-button" onClick={() => {
                            showEditInputBox(false)
                        }} >Save
                        </button>}
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

*/