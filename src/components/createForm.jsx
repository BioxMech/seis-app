import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class CreateForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {
        id: this.props.id + 1,
        firstName: "",
        lastName: "",
        email: "",
        dob: 0
      }
    }

    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onHandleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    }).then(
      window.location.reload()
    );
  }

  handleChange = e => {
    this.setState({ user: {...this.state.user, [e.target.name]: e.target.value }});
    // console.log(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control pattern="[A-Za-z]{1,}" required type="text" placeholder="First Name" name="firstName" onChange={this.handleChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control pattern="[A-Za-z]{1,}" required type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter your Email Address" name="email" onChange={this.handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>DOB</Form.Label>
          <Form.Control 
            required type="number" placeholder="Enter your DOB" name="dob" onChange={this.handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create User
        </Button>

      </Form>
    )
  }
}


export default CreateForm