import TasksFilter from '../TasksFilter/TasksFilter'
import './Footer.css'

export default function Footer({ setFilter, tasks, setTasks, filter }) {
  const activeTasksCount = tasks.filter((task) => !task.status).length

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.status))
    setFilter('All')
  }

  return (
    <footer className='footer'>
      <TasksFilter
        setFilter={setFilter}
        activeTasksCount={activeTasksCount}
        clearCompleted={clearCompleted}
        filter={filter}
      />
    </footer>
  )
}
