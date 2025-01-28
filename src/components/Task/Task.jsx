import { useState } from 'react'

export default function Task({ value, id, deleteTask, toggleTask, status, editTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newValue, setNewValue] = useState(value)

  const handleEdit = (e) => {
    if (e.key === 'Enter') {
      editTask(id, newValue)
      setIsEditing(false)
    }
  }

  return (
    <div>
      <input type='checkbox' onClick={() => toggleTask(id)} defaultChecked={status} />
      {isEditing ? (
        <input type='text' value={newValue} onChange={(e) => setNewValue(e.target.value)} onKeyDown={handleEdit} />
      ) : (
        <span style={status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{value}</span>
      )}
      {!isEditing && (
        <button type='button' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
      <button type='button' onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  )
}
