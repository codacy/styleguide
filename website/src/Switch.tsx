import React from 'react';

export interface SwitchProps {
    id: string;
    name: string;
    big?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onClick?: () => void;
}

export const Switch = (props: SwitchProps) => {
    const {
        id,
        name,
        big = false,
        checked,
        defaultChecked = false,
        onClick
    } = props;

    const typeClass = "switch-container";
    const sizeClass = big ? 'switch-md' : '';
    const className = [typeClass, sizeClass].join(" ");

    const attributes = { id, name, checked, defaultChecked, onClick };

    return (
        <div className={className}>
            <input {...attributes} type="checkbox" className="switch-button" />
            <label className="switch-label" htmlFor={id}></label>
        </div>
    );
};