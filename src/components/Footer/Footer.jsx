import { Component } from 'react'

import TasksFilter from '../TasksFilter/TasksFilter'
import './Footer.css'

class Footer extends Component {
  clearCompleted = () => {
    const { setTasks, setFilter, tasks } = this.props
    setTasks(tasks.filter((task) => !task.status))
    setFilter('All')
  }

  render() {
    const { setFilter, tasks, filter } = this.props
    const activeTasksCount = tasks.filter((task) => !task.status).length

    return (
      <footer className='footer'>
        <TasksFilter
          setFilter={setFilter}
          activeTasksCount={activeTasksCount}
          clearCompleted={this.clearCompleted}
          filter={filter}
        />
      </footer>
    )
  }
}

export default Footer
