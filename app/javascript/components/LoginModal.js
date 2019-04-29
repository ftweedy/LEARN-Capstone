import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class LoginModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <Modal open={this.props.open} onClose={this.props.onClose} basic size='small'>
        <Header content='Ready To Confess?' />
        <Modal.Content>
          <Form inverted>
            <Form.Field required={true}>
              <label>E-Mail Address</label>
              <input placeholder='Enter Your E-Mail Address' />
            </Form.Field>
            <Form.Field required={true}>
              <label>Password</label>
              <input type='password' placeholder='Enter Your Password' />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='blue' inverted>
            Log-In
          </Button>
          <Button basic color='green' inverted>
            Sign-Up
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default LoginModal
