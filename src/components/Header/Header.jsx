import { Component } from 'react'

import './Header.css'

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='header_logo'>todos</h1>
      </header>
    )
  }
}

export default Header
