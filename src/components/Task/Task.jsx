import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

import TaskTimer from '../TaskTimer/TaskTimer'
import './Task.css'

function Task({ id, value, deleteTask, toggleTask, status, createdAt, initialTime, updateTaskTime, editTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newValue, setNewValue] = useState(value)

  const handleEdit = (e) => {
    if (e.key === 'Enter') {
      editTask(id, newValue)
      setIsEditing(false)
    }
  }

  return (
    <li className='task'>
      {isEditing ? (
        <input
          className='editing'
          type='text'
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          onKeyDown={handleEdit}
        />
      ) : (
        <>
          <label htmlFor={`task-${id}`}>
            <input
              className='checkbox-toggle'
              type='checkbox'
              id={`task-${id}`}
              onClick={() => toggleTask(id)}
              defaultChecked={status}
            />
            <span
              className={`task-description ${status ? 'done' : ''}`}
              style={{ textDecoration: status ? 'line-through' : 'none' }}
            >
              {value}
            </span>
            <TaskTimer
              disabled={isEditing}
              initialTime={initialTime}
              updateTaskTime={(time) => updateTaskTime(id, time)}
            />
            <span className='task-created-at'>
              created {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </span>
          </label>
          <button
            className='edit-task-button task-buttons'
            type='button'
            onClick={() => setIsEditing(true)}
            aria-label='Edit task'
          />
          <button
            className='delete-task-button task-buttons'
            type='button'
            onClick={() => deleteTask(id)}
            aria-label='Delete task'
          />
        </>
      )}
    </li>
  )
}

export default Task
