import React, { useRef } from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretUp,
    faCaretDown,
    faSearch,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

import Select, { components } from 'react-select';
import { Styles } from 'react-select/src/styles';
import { IndicatorContainerProps, ContainerProps } from 'react-select/src/components/containers';
import { ControlProps } from 'react-select/src/components/Control';
import { MenuListComponentProps, NoticeProps } from 'react-select/src/components/Menu';
import { ActionTypes, GroupedOptionsType, OptionsType, ValueType, ActionMeta, InputActionMeta } from 'react-select/src/types';
import { OptionProps } from 'react-select/src/components/Option';

const selectStyles: Partial<Styles> = {
    control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};

export type BaseOptionType = {
    value: string;
    label: any;
}

export const Select2 = <OptionType extends BaseOptionType>({ options, isMulti }: { options: GroupedOptionsType<OptionType> | OptionsType<OptionType>, isMulti: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState<OptionType[] | undefined>(undefined);
    const [inputValue, setInputValue] = useState("");
    const value = values && values[0];

    const NoOptionsMessage = <OptionType extends BaseOptionType>(props: NoticeProps<OptionType>) => {
        return (
            <li key="feedback" role="presentation">
                <span style={{ margin: "10px", width: "220px", display: "block" }}>
                    No results matched "{inputValue}"
                </span>
            </li>
        );
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    const onInputChange = (newValue: string, actionMeta: InputActionMeta) => {
        switch (actionMeta.action) {
            case 'set-value':
                setInputValue("");
                break;
            case 'input-change':
                setInputValue(newValue);
                break;
            default:
            // Ignore
        }
    }

    const onSelectChange = (value: ValueType<OptionType>, actionMeta: ActionMeta) => {
        toggleOpen();

        console.log("Select2.onSelectChange| ", "values: ", values, "value: ", value, "actionMeta: ", actionMeta);

        if (value === undefined || value === null) {
            console.error("Received no value in onSelectChange")
            return;
        }

        const valueArray: OptionType[] = value instanceof Array ? value : [value]

        switch (actionMeta.action) {
            case 'select-option':
                if (isMulti) {
                    setValues(valueArray)
                } else if (valueArray.length === 2) {
                    setValues([valueArray[1]])
                } else {
                    setValues(valueArray)
                }
                break;
            case 'deselect-option':
                setValues(valueArray);
                break;
            case 'remove-value':
                console.error(`No action defined for ActionMeta.Action:${actionMeta.action}`);
                break;
            case 'pop-value':
                console.error(`No action defined for ActionMeta.Action:${actionMeta.action}`);
                break;
            case 'set-value':
                console.error(`No action defined for ActionMeta.Action:${actionMeta.action}`);
                break;
            case 'clear':
                setValues(undefined);
                break;
            case 'create-option':
                console.error(`No action defined for ActionMeta.Action:${actionMeta.action}`);
                break;
            default:
                console.error(`Could not recognize ActionMeta.Action:${actionMeta.action}`);
        }
    };

    let valueDisplay = "";
    if (isMulti) {
        if (values && values.length > 0 && values.length < 3) {
            valueDisplay = values.map((v) => v.label).join(", ");
        } else if (values && values.length > 0) {
            valueDisplay = `Selected ${values.length} values`;
        } else {
            valueDisplay = 'Select a State';
        }
    } else {
        if (value) {
            valueDisplay = value.label;
        } else {
            valueDisplay = valueDisplay = 'Select a State';
        }
    }

    return (
        <Dropdown
            isOpen={isOpen}
            onClose={toggleOpen}
            target={
                <Button
                    onClick={toggleOpen}
                // isSelected={isOpen}
                >
                    <span>
                        {/* {value ? <span>State: {value.label}</span> : 'Select a State'} */}
                        <span>{valueDisplay}</span>
                    </span>
                    <FontAwesomeIcon
                        style={{ margin: "0 10px" }}
                        icon={isOpen ? faCaretUp : faCaretDown}
                        size="1x"
                    />
                </Button>
            }
        >
            <Select
                autoFocus
                backspaceRemovesValue={false}
                components={{ NoOptionsMessage, DropdownIndicator: null, IndicatorSeparator: null, SelectContainer, MenuList, Option }}
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                isClearable={false}
                menuIsOpen
                // @ts-ignore
                onChange={onSelectChange}
                onInputChange={onInputChange}
                options={options}
                placeholder="Search..."
                styles={selectStyles}
                tabSelectsValue={false}
                value={isMulti ? values : value}
                isMulti
            />
        </Dropdown>
    );
};

// Styled components

const Menu = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const shadow = 'hsla(218, 50%, 10%, 0.1)';
    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
                marginTop: 8,
                position: 'absolute',
                zIndex: 2,
            }}
            {...props}
        />
    );
};
const Blanket = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <div
        style={{
            bottom: 0,
            left: 0,
            top: 0,
            right: 0,
            position: 'fixed',
            zIndex: 1,
        }}
        {...props}
    />
);

const Dropdown = ({ children, isOpen, target, onClose }: { children: React.ReactNode, isOpen: boolean, target: React.ReactElement, onClose: () => void }) => (
    <div style={{ position: 'relative' }}>
        {target}
        {isOpen ? <Menu>{children}</Menu> : null}
        {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
);

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        {...props}
    />
);

const SelectContainer = <OptionType extends BaseOptionType>(props: ContainerProps<OptionType>) => {
    return (
        <div>
            <components.SelectContainer {...props}>
                <FontAwesomeIcon
                    style={{ margin: "0 10px", float: 'left', height: '38px' }}
                    icon={faSearch}
                    size="1x"
                />
                {props.children}
            </components.SelectContainer>
        </div>
    );
};

const Option = <OptionType extends BaseOptionType>(props: OptionProps<OptionType>) => {
    return (
        <components.Option {...props}>
            {props.children}
            {props.isSelected ?
                <FontAwesomeIcon
                    style={{ float: 'right', height: '20px' }}
                    icon={faCheck}
                    size="1x"
                /> : undefined}
        </components.Option>
    );
};

const MenuList = <OptionType extends BaseOptionType>(props: MenuListComponentProps<OptionType>) => {
    return (
        <components.MenuList {...props}>
            {props.children && React.Children.toArray(props.children).reduce((e1, e2, idx) => {
                return idx === 0 ?
                    e2 :
                    <React.Fragment>
                        {e1}
                        <hr />
                        {e2}
                    </React.Fragment>;
            }, <React.Fragment />)}
            <hr />
            <div className="css-1veuksg-Group">
                <div>
                    <div className="css-1n7v3ny-option" id="react-select-2-option-1-1" tabIndex={-1}>
                        <img alt="Codacy" className="avatar avatar-xxs" src="https://lorempixel.com/50/50/people/3" />
                        <span>Custom option</span>
                    </div>
                </div>
            </div>
        </components.MenuList>
    );
};
