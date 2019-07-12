import React, { useState } from 'react';
import { FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';
import { Checkbox } from './Checkbox';

export interface InputWithCheckboxProps {
  label?: string;
  checkedPlaceholder?: string;
  uncheckedPlaceholder?: string;
  defaultChecked?: boolean;
  onTextChange?: (value: string) => void;
}

export const InputWithCheckbox = (props: InputWithCheckboxProps) => {
  const {
    label = '',
    checkedPlaceholder = 'Uncheck to disable',
    uncheckedPlaceholder = 'Check to enable',
    defaultChecked = false,
    onTextChange = () => { }
  } = props;

  const [checked, setChecked] = useState(defaultChecked);

  return (
    <FormGroup controlId="input-addon-checkbox" bsClass="form-group col-xs-6">
      <ControlLabel>{label}</ControlLabel>
      <InputGroup>
        <Checkbox id="addon-checkbox" name="addon" size="lg" extraClass="input-group-addon" checked={checked} onClick={() => setChecked(!checked)} />
        <FormControl type="text" onChange={(e) => { onTextChange((e.target as HTMLInputElement).value) }} placeholder={checked ? checkedPlaceholder : uncheckedPlaceholder} disabled={!checked} />
      </InputGroup>
    </FormGroup>
  );
};