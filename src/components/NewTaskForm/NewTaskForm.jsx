import { useState } from 'react'
import './NewTaskForm.css'

function NewTaskForm({ setTasks, tasks }) {
  const [todo, setTodo] = useState('')
  const [timerMinutes, setTimerMinutes] = useState('')
  const [timerSeconds, setTimerSeconds] = useState('')

  const addTask = () => {
    if (!todo.trim()) return

    const minutes = parseInt(timerMinutes, 10) || 0
    const seconds = parseInt(timerSeconds, 10) || 0

    const initialTime = (minutes * 60 + seconds) * 1000

    const newTask = {
      id: Math.random(),
      value: todo,
      status: false,
      createdAt: new Date(),
      initialTime
    }

    setTasks([newTask, ...tasks])
    setTodo('')
    setTimerMinutes('')
    setTimerSeconds('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <form className='new-todo-form'>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Task'
        className='new-todo'
      />
      <input
        type='number'
        min='0'
        max='59'
        value={timerMinutes}
        onChange={(e) => setTimerMinutes(e.target.value)}
        placeholder='Min'
        className='new-todo-timer'
      />
      <input
        type='number'
        min='0'
        max='59'
        value={timerSeconds}
        onChange={(e) => setTimerSeconds(e.target.value)}
        placeholder='Sec'
        className='new-todo-timer'
      />
    </form>
  )
}

export default NewTaskForm
