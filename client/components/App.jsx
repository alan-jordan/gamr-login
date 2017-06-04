import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Router>
        <div className="container">
          <Header />
        </div>
      </Router>
    )
  }
}
