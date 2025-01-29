import TasksFilter from '../TasksFilter/TasksFilter'

export default function Footer({ setFilter, tasks, setTasks }) {
  const activeTasksCount = tasks.filter((task) => !task.status).length

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.status))
    setFilter('All')
  }

  return (
    <footer>
      <div>
        <TasksFilter setFilter={setFilter} activeTasksCount={activeTasksCount} clearCompleted={clearCompleted} />
      </div>
    </footer>
  )
}
