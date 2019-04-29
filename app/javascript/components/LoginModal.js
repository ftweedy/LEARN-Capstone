import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class LoginModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: "",
        password:""
      }
    }
  }

  handleEmailChange = event => {
    const { user } = this.state;
    user.email = event.target.value;
    this.setState({ user: user });
  };

  handlePasswordChange = event => {
    const { user } = this.state;
    user.password = event.target.value;
    this.setState({ user: user });
  };

  render () {
    const { handleUserLogin } = this.props
    return (
      <Modal open={this.props.open} onClose={this.props.onClose} basic size='small'>
        <Header content='Ready To Confess?' />
        <Modal.Content>
          <Form inverted>
            <Form.Field required={true} onChange={this.handleEmailChange}>
              <label>E-Mail Address</label>
              <input placeholder='Enter Your E-Mail Address' />
            </Form.Field>
            <Form.Field required={true} onChange={this.handlePasswordChange}>
              <label>Password</label>
              <input type='password' placeholder='Enter Your Password' />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='blue' inverted onClick={()=>handleUserLogin(this.state)}>
            Log-In
          </Button>
          <Button onClick={this.props.handleSignUp} basic color='green' inverted>
            Sign-Up
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default LoginModal
