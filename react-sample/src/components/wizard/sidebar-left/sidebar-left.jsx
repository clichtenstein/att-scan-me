import React, { Component } from 'react';
import Multistep from '../../../react-multistep/index';
import StepOne from '../../StepOne';
import StepTwo from '../../StepTwo';
import StepThree from '../../StepThree';

class SidebarLeft extends Component {
    constructor (props) {
        super(props)
        this.state = {
            options :  [{name: 'Osprey Box', imageUrl: 'att-osprey.png', checked : false},
            {name: 'HDMI Cable', imageUrl: 'CBL-SGL-HDMI-MICRO-MINI-F36.jpg', checked : false},
            {name: 'Power Cable', imageUrl: 'power.png', checked : false},
            {name: 'Remote Control', imageUrl: 'remote.png', checked : false}]
        }
      this.onChange = this.onChange.bind(this);
    };

    onChange =  (index, event) => {
        let optionState = this.state.options;
        if (optionState[index] ) {
            optionState[index].checked = !optionState[index].checked;
            this.setState({options : optionState});
        }
    }

    render() {
        // const options = [{name: 'Osprey BOX', imageUrl: 'att-osprey.png', checked : false},
        //  {name: 'HDMI cabel', imageUrl: 'CBL-SGL-HDMI-MICRO-MINI-F36.jpg', checked : false},
        //  {name: 'POWER cabel', imageUrl: 'power.png', checked : false},
        //  {name: 'REMOTE control', imageUrl: 'remote.png', checked : false}];
        
       

        const steps = [
            {name: 'StepOne', component: <StepOne options={this.state.options} onChange={this.onChange} isWarning="false" />},
            {name: 'StepTwo', component: <StepTwo/>},
            {name: 'StepThree', component: <StepThree/>},
          ];
        return (
            <div>
                <Multistep showNavigation={true} steps={steps}/>
            </div>
        );
    }
}

export default SidebarLeft;