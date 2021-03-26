import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = (props) => {
  const stepItem = props.steps.map( (step, i) => {
    return <StepListItemContainer 
              step={step} 
              key={i}
              receiveStep={props.receiveStep}/>;
  });


  return (
    <div className="steps">
      <ul className="step-list">{stepItem}</ul>
      <StepForm todo_id={props.todo_id} receiveStep={props.receiveStep} />
    </div>
  )
}

export default StepList;