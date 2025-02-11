import { Component } from 'react'
import './TaskTimer.css'

class TaskTimer extends Component {
  static formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    const pad = (num) => (num < 10 ? `0${num}` : num)
    return `${pad(minutes)}:${pad(seconds)}`
  }

  constructor(props) {
    super(props)
    this.state = {
      isTimerRunning: false,
      timerStart: null,
      elapsedTime: props.initialTime || 0
    }
    this.timerInterval = null
  }

  componentDidUpdate(prevProps) {
    const { initialTime } = this.props
    if (initialTime !== prevProps.initialTime) {
      this.setState({ elapsedTime: initialTime })
    }
  }

  componentWillUnmount() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
    }
  }

  startTimer = () => {
    const { isTimerRunning } = this.state
    if (isTimerRunning) return
    this.setState(
      {
        isTimerRunning: true,
        timerStart: Date.now()
      },
      () => {
        this.timerInterval = setInterval(() => {
          this.forceUpdate()
        }, 1000)
      }
    )
  }

  stopTimer = () => {
    const { isTimerRunning, timerStart, elapsedTime } = this.state
    if (!isTimerRunning) return

    const timePassed = Date.now() - timerStart
    clearInterval(this.timerInterval)
    this.timerInterval = null

    const newElapsedTime = elapsedTime + timePassed

    this.setState(
      {
        isTimerRunning: false,
        timerStart: null,
        elapsedTime: newElapsedTime
      },
      () => {
        const { updateTaskTime } = this.props
        updateTaskTime(newElapsedTime)
      }
    )
  }

  render() {
    const { disabled } = this.props
    const { isTimerRunning, timerStart, elapsedTime } = this.state

    const totalTime = elapsedTime + (isTimerRunning ? Date.now() - timerStart : 0)
    const formattedTime = TaskTimer.formatTime(totalTime)

    return (
      <span className='task-timer'>
        <button
          type='button'
          onClick={this.startTimer}
          aria-label='Start timer'
          className='start-timer-button task-buttons'
          disabled={disabled || isTimerRunning}
        />
        <button
          type='button'
          onClick={this.stopTimer}
          aria-label='Pause timer'
          className='pause-timer-button task-buttons'
          disabled={disabled || !isTimerRunning}
        />
        <span className='timer-display'>{formattedTime}</span>
      </span>
    )
  }
}

export default TaskTimer
