import React, { useState } from 'react'

import Header from './components/Header/Header'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [todo, setTodo] = useState('')
  const [tasks, setTasks] = useState([])

  // console.log(tasks)

  const addTask = () => {
    const taskTodo = {
      id: Math.random(),
      value: todo,
      status: false
    }
    const newTask = [taskTodo, ...tasks]
    setTasks(newTask)
    setTodo('')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    const toggle = tasks.map((e) => (e.id === id ? { ...e, status: !e.status } : { ...e }))
    setTasks(toggle)
  }

  return (
    <div>
      <Header />
      <NewTaskForm addTask={addTask} todo={todo} setTodo={setTodo} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  )
}

export default App
