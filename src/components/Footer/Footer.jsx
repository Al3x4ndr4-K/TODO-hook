import TasksFilter from '../TasksFilter/TasksFilter'
import './Footer.css'

function Footer({ setFilter, tasks, setTasks, filter }) {
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.status))
    setFilter('All')
  }

  const activeTasksCount = tasks.filter((task) => !task.status).length

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

export default Footer
