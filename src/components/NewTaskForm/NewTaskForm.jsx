import { Component } from 'react'
import './NewTaskForm.css'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      timerMinutes: '',
      timerSeconds: ''
    }
  }

  addTask = () => {
    const { todo, timerMinutes, timerSeconds } = this.state
    const { setTasks, tasks } = this.props

    if (!todo.trim()) return

    const minutes = parseInt(timerMinutes, 10) || 0
    const seconds = parseInt(timerSeconds, 10) || 0

    const initialTime = (minutes * 60 + seconds) * 1000

    const newTask = {
      id: Math.random(),
      value: todo,
      status: false,
      createdAt: new Date(),
      initialTime
    }

    if (Array.isArray(tasks)) {
      setTasks([newTask, ...tasks])
    } else {
      setTasks([newTask])
    }

    this.setState({ todo: '', timerMinutes: '', timerSeconds: '' })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addTask()
    }
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
  }

  handleMinutesChange = (e) => {
    this.setState({ timerMinutes: e.target.value })
  }

  handleSecondsChange = (e) => {
    this.setState({ timerSeconds: e.target.value })
  }

  render() {
    const { todo, timerMinutes, timerSeconds } = this.state
    return (
      <form className='new-todo-form'>
        <input
          value={todo}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder='Task'
          className='new-todo'
        />
        <input
          type='number'
          min='0'
          max='59'
          value={timerMinutes}
          onChange={this.handleMinutesChange}
          placeholder='Min'
          className='new-todo-timer'
        />
        <input
          type='number'
          min='0'
          max='59'
          value={timerSeconds}
          onChange={this.handleSecondsChange}
          placeholder='Sec'
          className='new-todo-timer'
        />
      </form>
    )
  }
}

export default NewTaskForm
