import Task from '../Task/Task'

export default function TaskList({ tasksCopy, deleteTask, toggleTask, editTask }) {
  return (
    <>
      {tasksCopy.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          value={task.value}
          status={task.status}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </>
  )
}
