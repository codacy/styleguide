import React from 'react';

type CheckboxSize = 'lg' | 'md' | 'default';
const defaultSize: CheckboxSize = 'default';

export interface CheckboxProps {
    id: string;
    name: string;
    value?: string;
    label?: string;
    extraClass?: string;
    inline?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: () => void;
    disabled?: boolean;
    size?: CheckboxSize;
}

export const Checkbox = (props: CheckboxProps) => {
    const {
        id,
        name,
        value = "",
        label = "",
        extraClass = "",
        inline = false,
        defaultChecked = false,
        checked,
        onChange,
        disabled = false,
        size = defaultSize,
    } = props;

    const typeClass = "checkbox";
    const sizeClass = size === 'default' ? '' : `checkbox-${size}`;
    const inlineClass = inline ? 'checkbox-inline' : '';
    const className = [typeClass, sizeClass, inlineClass, extraClass].join(" ");

    const checkedControls = (checked !== undefined && onChange !== undefined) ? { checked, onChange } : { defaultChecked }

    const attributes = { id, name, value, disabled, ...checkedControls };

    return (
        <div className={className}>
            <input {...attributes} type="checkbox" />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};