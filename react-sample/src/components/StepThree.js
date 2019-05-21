import React from 'react'

export class StepThree extends React.Component {
  constructor () {
    super()
    this.state = {
      showDiv: true,
    }
    this.handleClick = this.onClickBtn.bind(this);

  }



  onClickBtn () {
    this.setState({showDiv: false})
  }

  render () {
    return (
      <div className="step-content">
        <div className={this.state.showDiv ? '' : 'hidden'}>
          <span className="step-title" >Setup your device</span>
          <span className="step-subtitle">Turn on your TV</span>
          <div>Follow the onscreen prompts</div>
          <a href="#" className="success-btn" onClick={this.handleClick}>
            Device connected successfully
          </a>
        </div>
        <div className={this.state.showDiv ? 'hidden' : ''}>
          <p className="step3p">
          Congratulations on setting up your new DirectTV Osprey
            In AT&T we are always looking to improve the quality of our services.<br/>
          <a href="https://www.youtube.com/"> Send us your feedback</a>
          </p>
        </div>



      </div>
    )
  }
}
export default StepThree;
