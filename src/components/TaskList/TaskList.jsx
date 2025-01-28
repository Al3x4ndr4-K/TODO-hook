import Task from '../Task/Task'

export default function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <>
      {tasks.map((task) => (
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
