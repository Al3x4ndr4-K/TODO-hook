import { Component } from 'react'
import './TasksFilter.css'

// eslint-disable-next-line react/prefer-stateless-function
class TasksFilter extends Component {
  render() {
    const { setFilter, activeTasksCount, clearCompleted, filter } = this.props

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
}

export default TasksFilter
