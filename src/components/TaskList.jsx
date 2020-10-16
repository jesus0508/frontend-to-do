import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    let index = 0;
    return (
        <div className="list-item">
            {tasks.map(task => 
                <TaskItem key={task.id}
                    index={index++}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete} />
            )}
        </div>
    );
};

export default TaskList;