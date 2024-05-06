import React, { useState } from 'react';

function ToDoItem({ task, handleEdit, handleDelete }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleInputChange = (event) => {
        setEditedText(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        handleEdit(task.id, editedText);
        setIsEditing(false);
    };

    return (
        <div className="container mt-3">
            {isEditing ? (
                <div className="input-group">
                    <input type="text" className="form-control" value={editedText} onChange={handleInputChange} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={handleSaveClick}>Save</button>
                    </div>
                </div>
            ) : (
                <div className="d-flex align-items-center" style={{ backgroundColor: task.completed ? 'lightgreen' : 'transparent', padding: '10px', borderRadius: '5px' }}>
                    <div className="flex-grow-1">
                        {task.text}
                        <button className="btn btn-primary mr-2" onClick={handleEditClick}>Edit</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button></div>
                    <div className="mt-2">
                    </div>
                </div>
            )}

        </div>
    );
}

export default ToDoItem;
