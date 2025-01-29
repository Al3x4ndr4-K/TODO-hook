import Task from '../Task/Task'

export default function TaskList({ tasks, setTasks, filter }) {
  const filterTasks = () => {
    switch (filter) {
      case 'Active':
        return tasks.filter((task) => !task.status)
      case 'Completed':
        return tasks.filter((task) => task.status)
      default:
        return tasks
    }
  }

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id))

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: !task.status } : task)))
  }

  const editTask = (id, newValue) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, value: newValue } : task)))
  }

  return (
    <>
      {filterTasks().map((task) => (
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
