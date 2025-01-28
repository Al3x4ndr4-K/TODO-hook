import Task from '../Task/Task'

export default function TaskList({ tasksCopy, deleteTask, toggleTask }) {
  return (
    <>
      {tasksCopy.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          value={task.value}
          status={task.status}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </>
  )
}
