import React from 'react';

class Form extends React.Component {

  onHandleSubmit(e) {
    e.preventDefault()
    alert("works")
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        First Name: <input type="text"></input>
        Last Name: <input type="text"></input>
        Email: <input type="email"></input>
        dob: <input type="number"></input>
        <button type="submit">Create New User</button>
      </form>
    )
  }
}


export default Form