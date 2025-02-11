import { Component } from 'react'

import Task from '../Task/Task'

class TaskList extends Component {
  isVisible = (task) => {
    const { filter } = this.props
    if (filter === 'Active') return !task.status
    if (filter === 'Completed') return task.status
    return true
  }

  deleteTask = (id) => {
    const { setTasks, tasks } = this.props
    setTasks(tasks.filter((task) => task.id !== id))
  }

  toggleTask = (id) => {
    const { setTasks, tasks } = this.props
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: !task.status } : task)))
  }

  editTask = (id, newValue) => {
    const { setTasks, tasks } = this.props
    setTasks(tasks.map((task) => (task.id === id ? { ...task, value: newValue } : task)))
  }

  updateTaskTime = (id, time) => {
    const { setTasks, tasks } = this.props
    setTasks(tasks.map((task) => (task.id === id ? { ...task, initialTime: time } : task)))
  }

  render() {
    const { tasks } = this.props
    return (
      <>
        {tasks.map((task) => (
          <div key={task.id} style={{ display: this.isVisible(task) ? 'block' : 'none' }}>
            <Task
              id={task.id}
              value={task.value}
              status={task.status}
              editTask={this.editTask}
              deleteTask={this.deleteTask}
              toggleTask={this.toggleTask}
              createdAt={task.createdAt}
              initialTime={task.initialTime}
              updateTaskTime={this.updateTaskTime}
            />
          </div>
        ))}
      </>
    )
  }
}

export default TaskList
