import React from 'react';
import { Form, Modal, Button, Row, Col } from 'react-bootstrap';

class UpdateForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false,
      user: {
        id: this.props.user.id,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email,
        dob: this.props.user.dob,
      }
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClose() {
    this.setState({
      show: false
    })
  } 

  handleShow() {
    this.setState({
      show: true
    })
  }

  onHandleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    fetch("http://localhost:5000/users/" + this.state.user.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    }).then(
      window.location.reload()
    );
  }

  handleChange = e => {
    // if (this.props.data)
    this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value }});
    console.log(this.state.user)
  }

  render() {
    return (
      <>
      <Button variant="primary" onClick={this.handleShow}>
        Update
      </Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.onHandleSubmit}>
        <Modal.Body>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control pattern="[A-Za-z]{1,}" required type="text" placeholder="First Name" name="firstName" value={this.state.user.firstName} onChange={this.handleChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control pattern="[A-Za-z]{1,}" required type="text" placeholder="Last Name" name="lastName" value={this.state.user.lastName} onChange={this.handleChange} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter your Email Address" name="email" value={this.state.user.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>DOB</Form.Label>
              <Form.Control required type="number" placeholder="Enter your DOB" name="dob" value={this.state.user.dob} onChange={this.handleChange} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
      </>
    )
  }
}

export default UpdateForm