import { useState,  useContext } from "react";
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [titulo, setTitulo] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            titulo,
            description
        })
        setTitulo("")
        setDescription("")
    }

    function handleChange(e){
        return(
            setTitulo(e.target.value)
        )
    }

    return (
        <div className="max-w-md mx-auto"> 
            <form onSubmit={handleSubmit} className='bg-gray-800 p-10 mb-4'>
                <h1 className="text-2xl font-bold text-white mb-3">Create Task</h1>
                <input
                    className="bg-slate-300 p-3 w-full mb-2"
                    placeholder="Title"
                    onChange={handleChange} 
                    value={titulo} 
                    autoFocus
                    />
                <textarea 
                    className="bg-slate-300 p-3 w-full mb-2"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description } />
                <button
                    className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-700 ">Add</button>
            </form>
        </div>
    )
}

export default TaskForm;