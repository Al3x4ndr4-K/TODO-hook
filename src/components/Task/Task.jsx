export default function Task({ value, id, deleteTask, toggleTask, status, editTask }) {
  return (
    <div>
      <input type='checkbox' onClick={() => toggleTask(id)} defaultChecked={status} />
      <span style={status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{value}</span>
      <button type='button' onClick={() => editTask(id)}>
        Edit
      </button>
      <button type='button' onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  )
}
