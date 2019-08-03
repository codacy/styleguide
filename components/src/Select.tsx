/** @jsx jsx */

import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { jsx } from '@emotion/core';
import StateManager, { components } from 'react-select';
import { Styles } from 'react-select/src/styles';
import { ControlProps } from 'react-select/src/components/Control';
import { NoticeProps } from 'react-select/src/components/Menu';
import { GroupedOptionsType, OptionsType, ValueType, ActionMeta, InputActionMeta } from 'react-select/src/types';
import { OptionProps } from 'react-select/src/components/Option';
import { PlaceholderProps } from 'react-select/src/components/Placeholder';

export type BaseOptionType = {
    value: string;
    label: any;
}

export type SelectSearchProps = {
    isSearchable: boolean;
    searchInputPlaceholder?: string;
}

export type SelectProps<OptionType> = {
    options: GroupedOptionsType<OptionType> | OptionsType<OptionType>;
    defaultValues?: OptionType[],
    onChange: (values: OptionType[] | undefined) => void;
    isMulti?: boolean;
    isNavbar?: boolean;
    optionTypeName?: string;
    searchProps?: SelectSearchProps;
}

export const Select = <OptionType extends BaseOptionType>(
    {
        options,
        defaultValues,
        onChange,
        isMulti = false,
        isNavbar = false,
        optionTypeName = 'value',
        searchProps: { isSearchable, searchInputPlaceholder } = { isSearchable: false }
    }: SelectProps<OptionType>
) => {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState<OptionType[] | undefined>(defaultValues);
    const [searchInputValue, setSearchInputValue] = useState("");
    const value = values && values[0];

    const toggleOpen = () => setIsOpen(!isOpen);

    const onInputChange = (newValue: string, actionMeta: InputActionMeta) => {
        switch (actionMeta.action) {
            case 'set-value':
                setSearchInputValue("");
                break;
            case 'input-change':
                setSearchInputValue(newValue);
                break;
            default: // Ignore
        }
    }

    const onSelectChange = (value: ValueType<OptionType>, actionMeta: ActionMeta) => {
        if (!isMulti) toggleOpen();

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
            case 'clear':
                setValues(undefined);
                break;
            default:
                console.error(`Could not process ActionMeta.Action:${actionMeta.action}`);
        }

        onChange(values);
    };

    // TODO: Refactor to it's own method and allow customization
    let valueDisplay = "";
    if (isMulti) {
        if (values && values.length > 0 && values.length < 3) {
            valueDisplay = values.map((v) => v.label).join(", ");
        } else if (values && values.length > 0) {
            valueDisplay = `Selected ${values.length} ${optionTypeName}s`;
        } else {
            valueDisplay = `Select a ${optionTypeName}`;
        }
    } else {
        if (value) {
            valueDisplay = value.label;
        } else {
            valueDisplay = valueDisplay = `Select a ${optionTypeName}`;
        }
    }

    const placeholder = isSearchable ? {} : { Placeholder: PlaceholderNoop }

    return (
        <Dropdown
            isOpen={isOpen}
            onClose={toggleOpen}
            target={
                <Button
                    // TODO: Can we do this without forcing a btn type that does not exist on bootstrap?
                    className={isOpen ? "btn btn-select open" : "btn btn-select"}
                    onClick={toggleOpen}
                >
                    <span>
                        <span>{valueDisplay}</span>
                    </span>
                    <FontAwesomeIcon
                        style={{ margin: "0 5px" }}
                        icon={isOpen ? faChevronUp : faChevronDown}
                        size="xs"
                    />
                </Button>
            }
        >
            <StateManager
                autoFocus
                backspaceRemovesValue={false}
                components={{
                    ...placeholder,
                    Control,
                    DropdownIndicator: null,
                    IndicatorSeparator: null,
                    NoOptionsMessage: createNoOptionsMessage(isNavbar, searchInputValue),
                    Option
                }}
                controlShouldRenderValue={false}
                isSearchable={isSearchable}
                hideSelectedOptions={false}
                isClearable={false}
                menuIsOpen
                // @ts-ignore
                onChange={onSelectChange}
                onInputChange={onInputChange}
                options={options}
                styles={isNavbar ? createNavStyles(isSearchable) : createDefaultStyles(isSearchable)}
                tabSelectsValue={false}
                value={isMulti ? values : value}
                placeholder={searchInputPlaceholder || 'Search...'}
                isMulti={isMulti}
            />
        </Dropdown>
    );
};

// Styled components

const Menu = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div {...props} />
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
    <div style={{ display: 'inline-block' }}>
        {target}
        {isOpen ? <Menu>{children}</Menu> : null}
        {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
);

const Control = <OptionType extends BaseOptionType>(props: ControlProps<OptionType>) => {
    const {
        children,
        cx,
        getStyles,
        className,
        isDisabled,
        isFocused,
        innerRef,
        innerProps,
        // @ts-ignore
        menuIsOpen
    } = props;
    return (
        <div
            ref={innerRef}
            css={getStyles('control', props)}
            // @ts-ignore
            className={cx(
                {
                    control: true,
                    'control--is-disabled': isDisabled,
                    'control--is-focused': isFocused,
                    'control--menu-is-open': menuIsOpen,
                },
                className
            )}
            {...innerProps}
        >
            {children}
        </div>
    );
};

const createNoOptionsMessage = (isNavbar: Boolean, searchInputValue: string) => (
    <OptionType extends BaseOptionType>(props: NoticeProps<OptionType>) => {
        return (
            <div key="feedback" style={{
                padding: '3px 16px',
                color: isNavbar ? '#e5ecf5' : '#101e35'
            }}>
                No results matched "{searchInputValue}"
        </div>
        );
    }
);

const PlaceholderNoop = <OptionType extends BaseOptionType>(props: PlaceholderProps<OptionType>) => (
    <React.Fragment />
);

const Option = <OptionType extends BaseOptionType>(props: OptionProps<OptionType>) => {
    return (
        <components.Option {...props}>
            {props.children}
            {(props.isMulti && props.isSelected) ?
                <FontAwesomeIcon
                    style={{ float: 'right', height: '20px', color: '#2a6cff' }}
                    icon={faCheck}
                    size="1x"
                /> : null}
        </components.Option>
    );
};

const createDefaultStyles = (isSearchable: Boolean): Partial<Styles> => {
    const controlProperties = isSearchable ? {
        margin: '5px 8px',
        // border: '1px solid #c9d8ef',
        border: '1px solid #2a6cff',
        boxShadow: 'none',
        borderRadius: '3px',
        color: '#15294a',
        fontSize: '14px',
        transition: 'all .2s linear',
    } : {
            display: 'block',
            width: 0,
            height: 0
        };

    return {
        control: () => controlProperties,
        container: () => ({
            backgroundColor: 'white',
            borderRadius: 3,
            border: '1px solid #2a6cff',
            boxShadow: 'none',
            position: 'absolute',
            marginTop: 2,
            minWidth: 160,
            zIndex: 2
        }),
        indicatorsContainer: () => ({
            display: 'block',
            width: 0,
            height: 0
        }),
        menu: () => ({
            minWidth: 160,
            position: 'relative',
            padding: '5px 0',
            '.fixed-option': {
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                backgroundColor: 'white',
                borderTop: '1px solid #e5ecf5',
                color: '#101e35',
                fontWeight: 'normal',
                padding: '3px 16px'
            }
        }),
        menuList: provided => ({
            ...provided,
            maxHeight: 200
        }),
        group: provider => ({
            ...provider,
            ':not(:last-child)': {
                borderBottom: '1px solid #e5ecf5'
            }
        }),
        groupHeading: provided => ({ ...provided, color: '#c9d8ef', fontWeight: 700, padding: '3px 16px' }),
        option: (provided, state) => ({
            ...provided,
            color: !state.isFocused ? '#101e35' : '#ccc',
            padding: '3px 16px',
            backgroundColor: 'transparent',
            fontWeight: state.isSelected ? 700 : undefined
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0 8px'
        })
    }
};

const createNavStyles = (isSearchable: Boolean): Partial<Styles> => {
    const controlProperties = isSearchable ? {
        background: '#15294a',
        borderBottom: '1px solid #1d3660',
        borderRadius: 0,
        color: '#e5ecf5',
        margin: '5px 15px 0 15px'
    } : {
            display: 'block',
            width: 0,
            height: 0
        };

    return {
        ...createDefaultStyles(isSearchable),
        control: () => controlProperties,
        container: () => ({
            backgroundColor: '#15294a',
            borderRadius: '2px',
            position: 'absolute',
            marginTop: '5px',
            minWidth: '160px',
            zIndex: 2
        }),
        input: (provided) => ({
            ...provided,
            color: '#fff'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#e5ecf5'
        }),
        menu: () => ({
            minWidth: 160,
            position: 'relative',
            '.fixed-option': {
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                backgroundColor: 'white',
                borderTop: '1px solid #e5ecf5',
                color: '#e5ecf5',
                fontWeight: 'normal',
                padding: '3px 16px'
            }
        }),
        group: provider => ({
            ...provider,
            ':not(:last-child)': {
                borderBottom: '1px solid #1d3660'
            }
        }),
        groupHeading: provided => ({ ...provided, color: '#e5ecf5', fontWeight: 700, padding: '3px 16px' }),
        option: (provided, state) => ({
            ...provided,
            color: !state.isFocused ? '#e5ecf5' : '#ccc',
            padding: '3px 16px',
            backgroundColor: 'transparent',
            fontWeight: state.isSelected ? 700 : undefined
        })
    }
};
