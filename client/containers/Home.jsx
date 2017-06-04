import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {changeAddFormVisibility} from '../actions'
import AddUserForm from '../components/AddUser'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      addVisible: null,
      error: null
    }
  }


  render() {
    return (
      <div className='row'>
        <div className="col-md-12">
          <a href='#' onClick={(e) => this.props.dispatch(changeAddFormVisibility(this.props.addFormVisible))}>add user</a>
          {this.props.addFormVisible ? <AddUserForm /> : ''}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addFormVisible: state.addFormVisible
  }
}

export default connect(mapStateToProps)(Home)
