export default function Task({ value, id, deleteTask, toggleTask, status }) {
  return (
    <div>
      <input type='checkbox' onClick={() => toggleTask(id)} />
      <span style={status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{value}</span>
      <button type='button' onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  )
}
