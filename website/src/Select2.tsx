import React, { useRef } from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faChevronUp,
    faChevronDown,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

import Select, { components } from 'react-select';
import { Styles } from 'react-select/src/styles';
import { IndicatorContainerProps, ContainerProps, ValueContainerProps } from 'react-select/src/components/containers';
import { ControlProps } from 'react-select/src/components/Control';
import { MenuListComponentProps, NoticeProps } from 'react-select/src/components/Menu';
import { GroupedOptionsType, OptionsType, ValueType, ActionMeta, InputActionMeta } from 'react-select/src/types';
import { OptionProps } from 'react-select/src/components/Option';
import { InputProps } from 'react-select/src/components/Input';
import { PlaceholderProps } from 'react-select/src/components/Placeholder';

const normalSelect: Partial<Styles> = {
    container: () => ({
        backgroundColor: 'white',
        borderRadius: 3,
        border: '1px solid #2a6cff',
        boxShadow: `none`,
        position: 'absolute',
        marginTop: 2,
        minWidth: 160,
        zIndex: 2
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
        color: '#101e35',
        padding: '3px 16px',
        backgroundColor: 'transparent',
        fontWeight: state.isSelected ? 700 : undefined
    })
};

const navbarSelect: Partial<Styles> = {
    container: () => ({
        backgroundColor: '#15294a',
        borderRadius: 2,
        position: 'absolute',
        marginTop: 5,
        minWidth: 160,
        zIndex: 2
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
            color: '#e5ecf5',
            fontWeight: 'normal',
            padding: '3px 16px'
        } 
    }),
    input: () => ({
        background: '#15294a',
        border: 0,
        borderBottom: '1px solid #1d3660',
        borderRadius: 0,
        color: '#e5ecf5'
    }),
    menuList: provided => ({ 
        ...provided, 
        maxHeight: 200
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
        color: '#e5ecf5',
        padding: '3px 16px',
        backgroundColor: 'transparent',
        fontWeight: state.isSelected ? 700 : undefined
    })
};

export type BaseOptionType = {
    value: string;
    label: any;
}

export const Select2 = <OptionType extends BaseOptionType>({ options, isMulti, isNavbar = false }: { options: GroupedOptionsType<OptionType> | OptionsType<OptionType>, isMulti: boolean, isNavbar?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState<OptionType[] | undefined>(undefined);
    const [inputValue, setInputValue] = useState("");
    const value = values && values[0];

    const NoOptionsMessage = <OptionType extends BaseOptionType>(props: NoticeProps<OptionType>) => {
        return (
            <div key="feedback" style={{ 
                    padding: '3px 16px',
                    color: isNavbar ? '#e5ecf5' : '#101e35'
                }}>
                No results matched "{inputValue}"
            </div>
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
                    bsStyle={isOpen ? "select open" : "select"}
                    onClick={toggleOpen}
                >
                    <span>
                        {/* {value ? <span>State: {value.label}</span> : 'Select a State'} */}
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
            <Select
                autoFocus
                backspaceRemovesValue={false}
                components={{ NoOptionsMessage, DropdownIndicator: null, IndicatorSeparator: null, SelectContainer, MenuList, Option, Control, ValueContainer, Input, Placeholder }}
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                isClearable={false}
                menuIsOpen
                // @ts-ignore
                onChange={onSelectChange}
                onInputChange={onInputChange}
                options={options}
                placeholder="Search..."
                styles={isNavbar ? navbarSelect : normalSelect}
                tabSelectsValue={false}
                value={isMulti ? values : value}
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
        innerRef,
        innerProps
    } = props;
    const [valueContainer, indicatorsContainer] = React.Children.toArray(children);
    return (
        <React.Fragment>
            <div ref={innerRef} {...innerProps} style={{margin: '5px 8px'}}>
                {valueContainer}
                {indicatorsContainer}
            </div>
        </React.Fragment>
    );
};

const ValueContainer = <OptionType extends BaseOptionType>(props: ValueContainerProps<OptionType>) => {
    const { children } = props;
    return (
        <React.Fragment>
            {children} {/* [[Placeholder], Input] */}
        </React.Fragment>
    );
};

const Input = ({
    className,
    cx,
    getStyles,
    innerRef,
    isHidden,
    isDisabled,
    // @ts-ignore
    theme,
    // @ts-ignore
    selectProps,
    ...props
}: InputProps) => (
        <input
            className="form-control"
            // @ts-ignore
            ref={innerRef}
            disabled={isDisabled}
            //hidden={isHidden}
            placeholder="Search..."
            {...props}
        />
    );

const Placeholder = <OptionType extends BaseOptionType>(props: PlaceholderProps<OptionType>) => (
    <React.Fragment />
);

const SelectContainer = <OptionType extends BaseOptionType>(props: ContainerProps<OptionType>) => {
    return (
        <components.SelectContainer {...props}>
            {props.children}
        </components.SelectContainer>
    );
};

const Option = <OptionType extends BaseOptionType>(props: OptionProps<OptionType>) => {
    return (
        <components.Option {...props}>
            {props.children}
            {(props.isSelected && props.isMulti) ?
                <FontAwesomeIcon
                    style={{ float: 'right', height: '20px', color: '#2a6cff' }}
                    icon={faCheck}
                    size="1x"
                /> : undefined}
        </components.Option>
    );
};

const MenuList = <OptionType extends BaseOptionType>(props: MenuListComponentProps<OptionType>) => {
    return (
        <React.Fragment>
            <components.MenuList {...props}>
                {props.children}
            </components.MenuList>
        </React.Fragment>
    );
};