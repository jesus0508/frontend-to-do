import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, value, onChange, onUpdate, onDelete }) => {
    let index = 0;
    return (
        <div className="list-item">
            {tasks.map(task =>
                <TaskItem key={task.id}
                    index={index++}
                    task={task}
                    value={value}
                    onChange={onChange}
                    onUpdate={onUpdate}
                    onDelete={onDelete} />
            )}
        </div>
    );
};

export default TaskList;