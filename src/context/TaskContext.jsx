import { createContext, useState, useEffect } from "react"
import { tareas } from '../helpers/helpers'

export const TaskContext = createContext()      //Este es el nombre del contexto

export function TaskContextProvider(props) {
    const [task, setTask] = useState([])

    function createTask(taskNuevo) {
        setTask([...task, {
            title: taskNuevo.titulo,
            id: task.length,
            description: taskNuevo.description
        }])
    }

    function deleteTask(taskID) {
        setTask(task.filter(task => task.id !== taskID))
    }

    useEffect(() => {
        setTask(tareas)
    }, [])

    return (
        <TaskContext.Provider value={{
            task,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

