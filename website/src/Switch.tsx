import React from 'react';

export interface SwitchProps {
    id: string;
    name: string;
    big?: boolean;
    checked?: boolean;
}

export const Switch = (props: SwitchProps) => {
    const {
        id,
        name,
        big = false,
        checked = false,
    } = props;


    const typeClass = "switch-container";
    const sizeClass = big ? 'switch-md' : '';
    const className = [typeClass, sizeClass].join(" ");

    return (
        <div className={className}>
            <input id={id} type="checkbox" className="switch-button" name={name} checked={checked}/>
            <label className="switch-label" htmlFor={id}></label>
        </div>
    );
};