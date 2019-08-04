import React from 'react';

export interface SwitchProps {
    id: string;
    name: string;
    big?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: () => void;
}

export const Switch = (props: SwitchProps) => {
    const {
        id,
        name,
        big = false,
        defaultChecked = false,
        checked,
        onChange
    } = props;

    const typeClass = "switch-container";
    const sizeClass = big ? 'switch-md' : '';
    const className = [typeClass, sizeClass].join(" ");

    const checkedControls = (checked !== undefined && onChange !== undefined) ? { checked, onChange } : { defaultChecked }

    const attributes = { id, name, ...checkedControls };

    return (
        <div className={className}>
            <input {...attributes} type="checkbox" className="switch-button" />
            <label className="switch-label" htmlFor={id}></label>
        </div>
    );
};