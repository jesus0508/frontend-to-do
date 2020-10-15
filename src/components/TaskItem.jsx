import React from "react";

const TaskItem = ({ index, task, onUpdate, onDelete }) => {
    const { id, description, state } = task;
    return (
        <div key={index}>
            <div>
                <label>
                    <input type="checkbox" id={id} />
                </label>
                <span>{description}</span>
            </div>
            <div>
                <button onClick={() => onUpdate(id, index)}
                    type="button">
                    Editar
                </button>
            </div>
            <div>
                <button onClick={() => onDelete(id, index)}
                    type="button">
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default TaskItem;