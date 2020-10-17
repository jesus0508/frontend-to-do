import React, { useState } from "react";
import TaskItemShow from "./TaskItemShow";
import TaskItemEdit from "./TaskItemEdit";

const TaskItem = ({ index, task, value, onChange, onUpdate, onDelete }) => {

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const onClickEditButton = () => setIsUpdating(!isUpdating);
    const onClickDeleteButton = () => setIsDeleting(!isDeleting);

    return !isUpdating ?
        <TaskItemShow
            index={index}
            task={task}
            onClickEditButton={onClickEditButton}
            onClickDeleteButton={onClickDeleteButton} /> :
        <TaskItemEdit
            index={index}
            task={task}
            value={value}
            onChange={onChange}
            onUpdate={onUpdate} />;
};



export default TaskItem;