import './TaskTimer.css'
import { useEffect, useRef, useState } from 'react'

const formatTime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const pad = (num) => (num < 10 ? `0${num}` : num)
  return `${pad(minutes)}:${pad(seconds)}`
}

function TaskTimer({ initialTime = 0, updateTaskTime, disabled }) {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(initialTime)
  const timerStartRef = useRef(null)
  const timerIntervalRef = useRef(null)

  useEffect(() => {
    setElapsedTime(initialTime)
  }, [initialTime])

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setElapsedTime(initialTime + (Date.now() - timerStartRef.current))
      }, 1000)
    } else {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }

    return () => clearInterval(timerIntervalRef.current)
  }, [isTimerRunning, initialTime])

  const startTimer = () => {
    if (isTimerRunning) return
    timerStartRef.current = Date.now()
    setIsTimerRunning(true)
  }

  const stopTimer = () => {
    if (!isTimerRunning) return

    const totalElapsed = initialTime + (Date.now() - timerStartRef.current)
    setElapsedTime(totalElapsed)
    setIsTimerRunning(false)
    updateTaskTime(totalElapsed)
  }

  return (
    <span className='task-timer'>
      <button
        type='button'
        onClick={startTimer}
        aria-label='Start timer'
        className='start-timer-button task-buttons'
        disabled={disabled || isTimerRunning}
      />
      <button
        type='button'
        onClick={stopTimer}
        aria-label='Pause timer'
        className='pause-timer-button task-buttons'
        disabled={disabled || !isTimerRunning}
      />
      <span className='timer-display'>{formatTime(elapsedTime)}</span>
    </span>
  )
}

export default TaskTimer
