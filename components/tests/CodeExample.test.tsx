import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { CodeExample } from '../src/CodeExample';
import { Dropdown, MenuItem } from 'react-bootstrap';

afterEach(cleanup);

describe('CodeExample', () => {
  test('renders a bootstrap dropdown', () => {
    const { getByTestId } = render(
      <CodeExample>
        <Dropdown id="dropdown-custom-1" data-testid="dropdown-custom-1">
          <Dropdown.Toggle bsStyle="primary">
            <i className="fa fa-filter"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1" active>Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </CodeExample>
    );
    expect(getByTestId('dropdown-custom-1')).toBeInTheDocument()
  });
});
