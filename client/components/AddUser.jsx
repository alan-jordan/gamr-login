import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {changeAddFormVisibility} from '../actions'

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  render() {
    return (
      <div className='addUserForm'>
        <form className='addUserForm' onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Username: </label>
          <input type='text' name='user_username' value={this.state.user_username} placeholder = "Username" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>First name: </label>
          <input type='text' name='user_first_name' value={this.state.user_first_name} placeholder = "First Name" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Surname: </label>
          <input type='text' name='user_surname' value={this.state.user_surname} placeholder = 'Surname' onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Email: </label>
          <input type='email' name='user_email' value={this.state.user_email} placeholder = 'Email' onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Avatar Image: </label>
          <input type='text' name='user_image' value={this.state.user_image} placeholder = "Avatar image URL" onChange={(evt =>this.handleChange(evt))}/><br/>
          <input type='submit' value='add gamr' />
          <a href='#' onClick={(e) => this.props.dispatch(changeAddFormVisibility(this.props.addFormVisible))}>Cancel</a>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    addFormVisible: state.addFormVisible
  }
}

export default connect(mapStateToProps)(AddUser)
