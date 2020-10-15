import React from "react";

const TaskItem = ({ index, task, onUpdate, onDelete }) => {
    const { id, description, state } = task;
    return (
        <div key={index}>
            <div>
                <label>
                    <input type="checkbox" id={id} />
                    {description}
                </label>
            </div>
            <div>
                <span>
                    <button onClick={() => onUpdate(id, index)}
                        type="button">
                        Editar
                </button>
                </span>
                <span>
                    <button onClick={() => onDelete(id, index)}
                        type="button">
                        Eliminar
                </button>
                </span>
            </div>
        </div>
    );
}

export default TaskItem;