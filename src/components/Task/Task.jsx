import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

import './Task.css'

export default function Task({ value, id, deleteTask, toggleTask, status, editTask, createdAt }) {
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
      {!isEditing && (
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
            style={status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
          >
            {value}
          </span>
          <span className='task-created-at'>
            created {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </span>
        </label>
      )}
      {isEditing ? (
        <input
          className='editing'
          type='text'
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          onKeyDown={handleEdit}
        />
      ) : null}
      {!isEditing && (
        <>
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
