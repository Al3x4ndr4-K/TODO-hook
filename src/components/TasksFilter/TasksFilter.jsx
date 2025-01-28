export default function TasksFilter({ setDone, activeTasksCount }) {
  return (
    <>
      <span>{activeTasksCount} items left</span>
      <button type='button' onClick={() => setDone('All')}>
        All
      </button>
      <button type='button' onClick={() => setDone('Active')}>
        Active
      </button>
      <button type='button' onClick={() => setDone('Completed')}>
        Completed
      </button>
      <button type='button' onClick={() => setDone('Clear completed')}>
        Clear completed
      </button>
    </>
  )
}
