import './TasksFilter.css'

export default function TasksFilter({ setFilter, activeTasksCount, clearCompleted, filter }) {
  return (
    <>
      <span>{activeTasksCount} items left</span>
      <ul className='filters'>
        <li>
          <button
            className={`button ${filter === 'All' ? 'active' : ''}`}
            type='button'
            onClick={() => setFilter('All')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`button ${filter === 'Active' ? 'active' : ''}`}
            type='button'
            onClick={() => setFilter('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={`button ${filter === 'Completed' ? 'active' : ''}`}
            type='button'
            onClick={() => setFilter('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className='button clear-completed' type='button' onClick={clearCompleted}>
        Clear completed
      </button>
    </>
  )
}
