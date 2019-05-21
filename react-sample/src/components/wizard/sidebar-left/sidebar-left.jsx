import React, { Component } from 'react';
import Multistep from '../../../react-multistep/index';
import StepOne from '../../StepOne';
import StepTwo from '../../StepTwo';
import StepThree from '../../StepThree';

class SidebarLeft extends Component {


    render() {
        const steps = [
            {name: 'StepOne', component: <StepOne/>},
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