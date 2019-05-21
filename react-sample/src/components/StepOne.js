import React from 'react';
import './stepOne.scss';


export class StepOne extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      firstName: '', 
      lastName: ''
    }
    this.imageDir = '/images/';
    // this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleFirstNameChanged (event) {
  //   this.setState({firstName: event.target.value})
  // }

  // handleLastNameChanged (event) {
  //   this.setState({lastName: event.target.value})
  // }

  // handleChange(e) {
  //   this.props.onCheckboxChange(e.target.value);
  // }

  
  render () {
    return (
      <div className='step-content'>
        {/* {
           (this.props.isWarning) ?
            <div className='warning'>
              Please confirm missing item
            </div> : ''
        } */}
        <div className='row'>
          <label >Stock taking</label>
          <div className="checkbox-wrapper">
          {
            this.props.options.map((option, i) => (
              <div className="checkbox-item" key={option.name}>
                <label className="checkbox-container">
                <span className="device-name">{option.name}</span>
                <input
                  className='u-full-width'
                  type='checkbox'
                  onChange={(e) => this.props.onChange(i, e)}
                  value={option.checked}
                />
                <span className="checkmark"></span>
                <img className="device-img" src={this.imageDir + option.imageUrl} alt=""/>
                </label>  
              </div>
              )
            )
          }
      
          </div>
        </div>
      </div>
    )
  }
}

export default StepOne;
