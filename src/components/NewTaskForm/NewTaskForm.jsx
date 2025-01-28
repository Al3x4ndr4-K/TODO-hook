export default function NewTaskForm({ todo, setTodo, addTask }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }
  return (
    <span>
      Todo
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='What needs to be done?'
      />
    </span>
  )
}
