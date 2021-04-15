import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = () => {
    const taskList = useSelector((state) => state);
    const [filter, setFilter] = useState(false);
    const handleFilter = () => setFilter(!filter);
    return (
        <div>
            <AddTask filter= {filter} handleFilter={handleFilter} />
            <Task tasks={filter ? taskList.filter((el)=> el.isDone) : taskList} />
        </div>
    );
};
export default TaskList;

