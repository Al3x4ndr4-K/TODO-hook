export default function TasksFilter({ setFilter, activeTasksCount, clearCompleted }) {
  return (
    <>
      <span>{activeTasksCount} items left</span>
      <button type='button' onClick={() => setFilter('All')}>
        All
      </button>
      <button type='button' onClick={() => setFilter('Active')}>
        Active
      </button>
      <button type='button' onClick={() => setFilter('Completed')}>
        Completed
      </button>
      <button type='button' onClick={clearCompleted}>
        Clear completed
      </button>
    </>
  )
}
