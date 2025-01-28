import TasksFilter from '../TasksFilter/TasksFilter'

export default function Footer({ setDone }) {
  return (
    <footer>
      <div>
        <TasksFilter setDone={setDone} />
      </div>
    </footer>
  )
}
