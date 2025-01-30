import { Component } from 'react'

import Task from '../Task/Task'

class TaskList extends Component {
  filterTasks = () => {
    const { tasks, filter } = this.props

    switch (filter) {
      case 'Active':
        return tasks.filter((task) => !task.status)
      case 'Completed':
        return tasks.filter((task) => task.status)
      default:
        return tasks
    }
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

  render() {
    return (
      <>
        {this.filterTasks().map((task) => (
          <Task
            key={task.id}
            id={task.id}
            value={task.value}
            status={task.status}
            editTask={this.editTask}
            deleteTask={this.deleteTask}
            toggleTask={this.toggleTask}
            createdAt={task.createdAt}
          />
        ))}
      </>
    )
  }
}

export default TaskList
