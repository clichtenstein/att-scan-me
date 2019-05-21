import React from 'react'
import osprey from './../images/att-osprey.png';
import hdmi from './../images/CBL-SGL-HDMI-MICRO-MINI-F36.jpg';
import power from './../images/power.png';
import remote from './../images/remote.png';

export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: '',
      myOptions : ["Meat Lover", "Veggie Heaven", "Hawaii-5-0", "Inferno"]
    }
    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  handleFirstNameChanged (event) {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    this.setState({lastName: event.target.value})
  }

  
  render () {
    return (
      <div className='step-content'>
        <div className='row'>
          <label >Stock taking</label>
          <div>
            <label className="checkbox-container">
              <span className="device-name">Osprey BOX</span>
            <input
              className='u-full-width'
              type='checkbox'
              onChange={this.handleFirstNameChanged}
              value={this.state.firstName}
            />
            <span className="checkmark"></span>
            <img className="device-img" src={osprey} alt=""/>
            </label>
            <label>HDMI cabel</label>
            <input
              className='u-full-width'
              type='checkbox'
              onChange={this.handleFirstNameChanged}
              value={this.state.firstName}
            />
             <img src={hdmi} alt=""/>
            <label>POWER cabel</label>
            <input
              className='u-full-width'
              type='checkbox'
              onChange={this.handleFirstNameChanged}
              value={this.state.firstName}
            />
             <img src={power} alt=""/>
             <label>REMOTE control</label>
            <input
              className='u-full-width'
              type='checkbox'
              onChange={this.handleFirstNameChanged}
              value={this.state.firstName}
            />
            <img src={remote} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default StepOne;
