import React, { useState } from 'react';

type CheckboxSize = 'lg' | 'md' | 'default';
const defaultSize: CheckboxSize = 'default';

export interface CheckboxProps {
    id: string;
    name: string;
    value?: string;
    label?: string;
    extraClass?: string;
    inline?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: CheckboxSize;
    onClick?: () => void;
}

export const Checkbox = (props: CheckboxProps) => {
    const {
        id,
        name,
        value = "",
        label = "",
        extraClass = "",
        inline = false,
        checked,
        defaultChecked = false,
        disabled = false,
        size = defaultSize,
        onClick
    } = props;

    const typeClass = "checkbox";
    const sizeClass = size == 'default' ? '' : `checkbox-${size}`;
    const inlineClass = inline ? 'checkbox-inline' : '';
    const className = [typeClass, sizeClass, inlineClass, extraClass].join(" ");

    const attributes = { id, name, value, disabled, checked, defaultChecked };

    return (
        <div className={className}>
            <input {...attributes} type="checkbox" onClick={onClick} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};