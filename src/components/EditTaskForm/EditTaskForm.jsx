export default function EditTaskForm({ todo, editTask, setTodo }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      editTask()
    }
  }
  return (
    <span>
      Todo
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Update task'
      />
    </span>
  )
}
