import React from 'react'
import osprey from "../images/att-osprey.png";
import remote from "../images/remote.png";
import hdmiConnect from "../images/hdmi_connect.png";
import networkConnect from "../images/network_connect.png";
import powerConnect from "../images/power_connect.png";
export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      emailConfirm: ''
    }
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleEmailConfirmChanged = this.handleEmailConfirmChanged.bind(this);
  }

  handleEmailChanged (event) {
    this.setState({email: event.target.value})
  }

  handleEmailConfirmChanged (event) {
    this.setState({emailConfirm: event.target.value})
  }

  render () {
    return (
      <div className="step-content">
          <div className='row'>
              <label >Connect your device</label>
              <ol type="1">
                  <li>
                      <span className="connect_wrapper">
                      <label className="connect_item">HDMI</label>
                      <img className="device-img connect_img" src={hdmiConnect} alt=""/>
                      </span>
                  </li>
                  <li >
                      <span className="connect_wrapper">
                      <label className="connect_item">POWER</label>
                      <img className="device-img connect_img" src={powerConnect} alt=""/>
                      </span>
                  </li>
                  <li>
                      <span className="connect_wrapper">
                      <label className="connect_item">LAN</label>
                      <img className="device-img connect_img" src={networkConnect} alt=""/>
                      </span>
                  </li>
                  <li className="remote_li">
                      <label className="connect_item">Remote</label>
                      <img className="device-img remote" src={remote} alt=""/>
                      <span className="text">Remove tab from the back of the remote</span>
                  </li>
              </ol>
          </div>
      </div>
    )
  }
}
export default StepTwo;