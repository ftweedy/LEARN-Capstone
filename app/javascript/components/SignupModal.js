import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class SignupModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: "",
        password:"",
        password_confirmation:""
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

  handleConfirmPasswordChange = event => {
    const { user } = this.state;
    user.password_confirmation = event.target.value;
    this.setState({ user: user });
  };

  render () {
    const { signUp } = this.props
    return (
      <Modal open={this.props.open} onClose={this.props.onClose} basic size='small'>
        <Header content='Ready To Signup?' />
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
            <Form.Field required={true} onChange={this.handleConfirmPasswordChange}>
              <label>Confirm Password</label>
              <input type='password' placeholder='Confirm Your Password' />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={()=>signUp(this.state)} basic color='green' inverted>
            Sign-Up
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
export default SignupModal
