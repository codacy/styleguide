import React from 'react';

type ButtonType = 'submit' | 'reset' | 'button';
const defaultType: ButtonType = 'submit';

type ButtonStyle = 'default' | 'primary' | 'link' | 'success' | 'danger';
const defaultStyle: ButtonStyle = 'default';

type ButtonSize = 'lg' | 'default' | 'sm' | 'xs';
const defaultSize: ButtonSize = 'default';

export interface ButtonProps {
  autoFocus?: boolean;
  disabled?: boolean;
  name?: string;
  type?: ButtonType;
  style?: ButtonStyle;
  size?: ButtonSize;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    autoFocus = false,
    disabled = false,
    name,
    type = defaultType,
    style = defaultStyle,
    size = defaultSize,
    children
  } = props;

  const attributes = { autoFocus, disabled, name, type };

  const styleClasses = ['btn', `btn-${style}`];
  const sizeClass = size == 'default' ? '' : `btn-${size}`;
  const className = styleClasses.concat(sizeClass).join(' ')

  return <button className={className} {...attributes}>{children}</button>;
}
