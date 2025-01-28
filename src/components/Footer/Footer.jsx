import TasksFilter from '../TasksFilter/TasksFilter'

export default function Footer({ setDone, activeTasksCount }) {
  return (
    <footer>
      <div>
        <TasksFilter setDone={setDone} activeTasksCount={activeTasksCount} />
      </div>
    </footer>
  )
}
