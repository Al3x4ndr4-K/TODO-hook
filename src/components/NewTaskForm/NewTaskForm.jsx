import { Component } from 'react'
import './NewTaskForm.css'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  addTask = () => {
    const { todo } = this.state
    const { setTasks, tasks } = this.props

    if (!todo.trim()) return

    const newTask = {
      id: Math.random(),
      value: todo,
      status: false,
      createdAt: new Date()
    }

    if (Array.isArray(tasks)) {
      setTasks([newTask, ...tasks])
    } else {
      setTasks([newTask])
    }

    this.setState({ todo: '' })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addTask()
    }
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
  }

  render() {
    const { todo } = this.state
    return (
      <input
        value={todo}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        placeholder='What needs to be done?'
        className='new-todo'
      />
    )
  }
}

export default NewTaskForm
