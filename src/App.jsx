import React, { useState } from 'react'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  return (
    <div>
      <Header />
      <NewTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
      <Footer setFilter={setFilter} tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
