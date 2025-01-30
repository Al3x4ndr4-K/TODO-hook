import { Component } from 'react'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NewTaskForm from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      filter: 'All'
    }
  }

  setTasks = (newTasks) => {
    this.setState({ tasks: newTasks })
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { tasks, filter } = this.state

    return (
      <>
        <Header />
        <section className='todoapp'>
          <NewTaskForm tasks={tasks} setTasks={this.setTasks} />
          <ul className='task-list'>
            <TaskList tasks={tasks} setTasks={this.setTasks} filter={filter} />
          </ul>
          <Footer setFilter={this.setFilter} tasks={tasks} setTasks={this.setTasks} filter={filter} />
        </section>
      </>
    )
  }
}

export default App
