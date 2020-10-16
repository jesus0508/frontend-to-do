import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ index, task, onUpdate, onDelete }) => {
    const { id, description, state } = task;
    return (
        <div className="item">
            <div>
                <label>
                    <input type="checkbox" id={id} />
                    <span>{description}</span>
                </label>
            </div>
            <div>
                <span className="button">
                    <button onClick={() => onUpdate(id, index)}
                        type="button">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                </span>
                <span className="button">
                    <button onClick={() => onDelete(id, index)}
                        type="button">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </span>
            </div>
        </div>
    );
}

export default TaskItem;