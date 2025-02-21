import { useState } from 'react'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  return (
    <>
      <Header />
      <section className='todoapp'>
        <NewTaskForm tasks={tasks} setTasks={setTasks} />
        <ul className='task-list'>
          <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
        </ul>
        <Footer setFilter={setFilter} tasks={tasks} setTasks={setTasks} filter={filter} />
      </section>
    </>
  )
}

export default App
