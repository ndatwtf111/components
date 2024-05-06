import { useEffect, useState } from 'react';
import items from './items.json';
import ToDoItem from './TodoItem';
import './TodoList.css';

function Todo() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(items);
    }, []);

    const handleFinish = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const handleEdit = (id, itemText) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: itemText };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const handleAdd = (itemText) => {
        const newTask = {
            id: tasks.length + 1,
            text: itemText,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 b-black" >
            <div className="w-75">
                <div className="text-center mb-4 my-auto">
                    <h1>Tasks</h1>
                </div>
                <ul className="list-group">
                    {tasks.map((task, index) => (
                        <li key={index}
                            onDoubleClick={() => handleFinish(task.id)}
                        >
                            <ToDoItem
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                                task={task}
                            />
                        </li>
                    ))}
                </ul>
                <div className="mt-3">
                    <input type="text" className="form-control" placeholder="Add new task" onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim() !== '') {
                            handleAdd(e.target.value.trim());
                            e.target.value = '';
                        }
                    }} />
                </div>
            </div>
        </div>
    );
}

export default Todo;
