import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, FormInputComponent, ...props }) => (
  <GroupContainer>
    { FormInputComponent ? 
      <FormInputComponent handleChange={handleChange} {...props} /> : 
      <FormInputContainer onChange={handleChange} {...props} />
    }
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;