import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'


const steps = 
    [
      {name: 'Name', component: <StepOne/>},
      {name: 'Email', component: <StepTwo/>},
      {name: 'Password', component: <StepThree/>},
    ]

export { steps }