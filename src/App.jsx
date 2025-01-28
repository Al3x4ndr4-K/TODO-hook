import React, { useState } from 'react'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [todo, setTodo] = useState('')
  const [tasks, setTasks] = useState([])
  const [done, setDone] = useState('')

  let tasksCopy = tasks || []

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

  const editTask = (id, newValue) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, value: newValue } : task)))
  }

  switch (done) {
    case 'All':
      tasksCopy = tasks
      break
    case 'Active':
      tasksCopy = tasks.filter((task) => task.status === false)
      break
    case 'Completed':
      tasksCopy = tasks.filter((task) => task.status === true)
      break

    default:
      break
  }

  return (
    <div>
      <Header />
      <NewTaskForm addTask={addTask} todo={todo} setTodo={setTodo} />
      <TaskList tasksCopy={tasksCopy} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} />
      <Footer setDone={setDone} />
    </div>
  )
}

export default App
