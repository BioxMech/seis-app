import React from 'react';
import { Table } from 'react-bootstrap';

import UpdateForm from './updateForm';
import DeleteUser from './deleteUser';

class UserList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      userList: this.props.data,
      search: ""
    }

    this.handleSearch = this.handleSearch.bind(this)
  }  

  handleSearch = e => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <>
        Search by first name: <input type="text" onChange={this.handleSearch}></input>
        <br />
        <br />
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.filter(user => user.firstName.toLowerCase().includes(this.state.search))
              .map(user => (
                <tr key={user.id}>
                  <td>
                    {user.id}
                  </td>
                  <td>
                    {user.firstName}
                  </td>
                  <td>
                    {user.lastName}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {user.dob}
                  </td>
                  <td>
                    <UpdateForm user={user} />
                  </td>
                  <td>
                    <DeleteUser user={user} />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </>
    )
  }
}

export default UserList