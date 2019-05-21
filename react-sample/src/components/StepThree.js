import React from 'react'

export class StepThree extends React.Component {
  constructor () {
    super()
    this.state = { 
      password: '', 
      passwordConfirm: '' 
    }
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handlePasswordConfirmChanged = this.handlePasswordConfirmChanged.bind(this);
  }

  handlePasswordChanged (event) {
    this.setState({password: event.target.value})
  }

  handlePasswordConfirmChanged (event) {
    this.setState({passwordConfirm: event.target.value})
  }

  render () {
    return (
      <div className="step-content">
        <span className="step-title" >Setup your device</span>
        <span>Turn on your TV</span>
        <div>Follow the onscreen prompts</div>

        <button>
        Device connected successfully
        </button>


      </div>
    )
  }
}
export default StepThree;
