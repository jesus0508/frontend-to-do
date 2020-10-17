import React from "react";

const TaskItemEdit = ({ index, task, value, onChange, onUpdate }) => {
    return (
        <form onSubmit={() => onUpdate(task.id, index)} className="item">
            <input type="text" onChange={onChange} value={value} className="full-parent" />
        </form>
    );
};

export default TaskItemEdit;