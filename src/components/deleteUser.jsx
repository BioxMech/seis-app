import React, { createRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';

class DeleteUser extends React.Component {

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

    this.target = createRef()
    this.onHandleClick = this.onHandleClick.bind(this)
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, 2000)
  }

  onHandleClick() {
    console.log(this.state)
    fetch("http://localhost:5000/users/" + this.state.user.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    }).then(
      window.location.reload()
    );
  }

  render() {
    return (
      <>
        <Button variant="danger" ref={this.target} onClick={() => this.setState({show: true})}>
          Delete
        </Button>
        <Overlay target={this.target.current} show={this.state.show} placement="top" >
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
                textAlign: "center"
              }}
            >
              Are you sure?
              <br/>
              <a href="" style={{color: "black", fontWeight: "bold"}} onClick={this.onHandleClick}>Yes!!</a>
            </div>
          )}
        </Overlay>
      </>
    )
  }
}

export default DeleteUser