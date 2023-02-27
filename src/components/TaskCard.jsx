import {  useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({tarea}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{tarea.title}</h1>
      <p className='text-gray-500 text-sm'>{tarea.description}</p>
      <button 
        className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-700' 
        onClick={() => deleteTask(tarea.id)}
          >Delete
      </button>
    </div> 
  )
}

export default TaskCard