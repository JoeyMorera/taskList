import TaskCard from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskList() {

    const {task} = useContext(TaskContext)
    
    if (task.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No Tasks Yet</h1>
    }
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {task.map((tarea, index) => (
                    <TaskCard key={index} tarea={tarea} />
                ))}
        </div>
    )
}

export default TaskList;