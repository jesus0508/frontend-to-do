import React from "react";

const TaskItem = ({ task }) => {
    const {id, description, state} = task;
    return (
        <div key={id}>
            <div>
                <label>
                    <input type="checkbox" id={id} checked={state} />
                </label>
                <span>{description}</span>
            </div>
            <div>
                <button>Eliminar</button>
            </div>
            <div>
                <button>Editar</button>
            </div>
        </div>
    );
}

export default TaskItem;