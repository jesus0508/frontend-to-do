import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    return tasks.map(task => (
        <TaskItem task={task} key={task.id} />
    ));
};

export default TaskList;