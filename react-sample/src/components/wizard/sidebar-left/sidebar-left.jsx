import React, { Component } from 'react';
import MultiStep from 'react-multistep';

class SidebarLeft extends Component {


    render() {
        const steps = [
            {name: 'StepOne', component: <StepOne/>},
            {name: 'StepTwo', component: <StepTwo/>},
            {name: 'StepThree', component: <StepThree/>},
            {name: 'StepFour', component: <StepFour/>}
          ];
        return (
            <div>
                <Multistep showNavigation={true} steps={steps}/>
            </div>
        );
    }
}

export default SidebarLeft;