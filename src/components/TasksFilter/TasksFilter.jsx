import './TasksFilter.css'

function TasksFilter({ setFilter, activeTasksCount, clearCompleted, filter }) {
  return (
    <>
      <span>{activeTasksCount} items left</span>
      <ul className='filters'>
        {['All', 'Active', 'Completed'].map((e) => (
          <li key={e}>
            <button className={`button ${filter === e ? 'active' : ''}`} type='button' onClick={() => setFilter(e)}>
              {e}
            </button>
          </li>
        ))}
      </ul>
      <button className='button clear-completed' type='button' onClick={clearCompleted}>
        Clear completed
      </button>
    </>
  )
}

export default TasksFilter
