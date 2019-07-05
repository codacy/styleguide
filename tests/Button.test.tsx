import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { Button } from '../src/Button';

afterEach(cleanup);

describe('Button', () => {
  test('returns a button with right text', () => {
    const { baseElement } = render(<Button>Botone</Button>);
    expect(baseElement).toHaveTextContent('Botone');
  });

  test('returns a button with right default type', () => {
    const { getByTestId } = render(<Button data-testid={'btn'}>Botone</Button>);
    expect(getByTestId('btn')).toHaveAttribute('type', 'button');
  });

  test('returns a button with specific type', () => {
    const { getByTestId } = render(<Button type={'submit'} data-testid={'btn'}>Botone</Button>);
    expect(getByTestId('btn')).toHaveAttribute('type', 'submit');
  });
});
