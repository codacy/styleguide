import React, { useState }  from 'react';
import { FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap';
import { Checkbox } from './Checkbox';

export const InputWithCheckbox = () => {
    const [checked, setChecked] = useState(false)

    return (
        <FormGroup controlId="input-addon-checkbox" bsClass="form-group col-xs-6">
          <ControlLabel>Some label</ControlLabel>
          <InputGroup>
            <Checkbox id="addon-checkbox" name="addon" size="lg" extraClass="input-group-addon" onClick={() => setChecked(!checked)}/>
            <FormControl type="text" placeholder={checked ? "Uncheck to disable" : "Check to enable"} disabled={!checked}/>
          </InputGroup>
        </FormGroup>
    );
};