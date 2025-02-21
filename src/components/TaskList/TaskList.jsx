import Task from '../Task/Task'

const TaskList = ({ tasks, setTasks, filter }) => {
  const isVisible = (task) => {
    if (filter === 'Active') return !task.status
    if (filter === 'Completed') return task.status
    return true
  }

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id))

  const toggleTask = (id) => setTasks(tasks.map((task) => (task.id === id ? { ...task, status: !task.status } : task)))

  const editTask = (id, newValue) =>
    setTasks(tasks.map((task) => (task.id === id ? { ...task, value: newValue } : task)))

  const updateTaskTime = (id, time) =>
    setTasks(tasks.map((task) => (task.id === id ? { ...task, initialTime: time } : task)))

  return tasks.map((task) => (
    <div key={task.id} style={{ display: isVisible(task) ? 'block' : 'none' }}>
      <Task
        id={task.id}
        value={task.value}
        status={task.status}
        createdAt={task.createdAt}
        initialTime={task.initialTime}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
        updateTaskTime={updateTaskTime}
      />
    </div>
  ))
}

export default TaskList
