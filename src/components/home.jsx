import React from 'react';
import { Container, Row, Col, Spinner, Pagination } from 'react-bootstrap';

import CreateForm from './createForm';
import UserList from './userlist';

class Home extends React.Component {

  constructor() {
    super()

    this.state = {
      loading: true,
      userList: [],
      pageNum: 1,
      active: 1
    }

    this.onPageChange = this.onPageChange.bind(this)
  }

  componentDidMount() {
    fetch("http://localhost:5000/users?_sort=id?_limit=10&_page=1")
      .then(res => res.json())
      .then(users => {
        this.setState({
          userList: users,
          loading: false,
          pageLength: Math.ceil(users.length / 10)
        })
      })
  }

  onPageChange = e => {
    fetch("http://localhost:5000/users?_sort=id?_limit=10&_page=" + e.target.innerText)
      .then(res => res.json())
      .then(users => {
        this.setState({
          userList: users,
          loading: false,
          pageNum: e.target.innerText,
          active: parseInt(e.target.innerText)
        })
      })
  }

  render() {
    let items = [];
    for (let number = 1; number <= this.state.pageLength + 1; number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.state.active} onClick={this.onPageChange} >
          {number}
        </Pagination.Item>,
      );
    }

    return (
      <Container>
        {
          this.state.loading ?
          <Container style={{display: "flex", justifyContent: "center", marginTop: "50vh"}}><Spinner animation="grow" />Loading Page ...</Container>
          :
          <Row>
            <Col xs={12} className="py-3 mt-5 mb-3" style={{border: "0.5px solid grey"}}>
              <div style={{fontSize:"20px", fontWeight:"bold", textDecoration:"underline", marginBottom: "10px"}}>Create a new user</div>
              <CreateForm id={this.state.userList[this.state.userList.length - 1].id} data={this.state.userList} />
            </Col>
            <Col xs={12} className="my-3">
              <UserList data={this.state.userList} />
            </Col>
          </Row>
        }
        <Pagination style={{display:"flex", justifyContent:"center"}}>{items}</Pagination>
      </Container>
    )
  }
}
  


export default Home