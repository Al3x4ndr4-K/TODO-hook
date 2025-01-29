import { useState } from 'react'

export default function NewTaskForm({ setTasks }) {
  const [todo, setTodo] = useState('')

  const addTask = () => {
    if (!todo.trim()) return

    const newTask = {
      id: Math.random(),
      value: todo,
      status: false,
      createdAt: new Date()
    }

    setTasks((prevTasks) => [newTask, ...prevTasks])
    setTodo('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <input
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder='What needs to be done?'
    />
  )
}
