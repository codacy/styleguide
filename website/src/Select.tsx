import React from "react";
import { useEffect, useRef, useState } from "react";
import { Dropdown, MenuItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretUp,
    faCaretDown,
    faSearch,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import Fuse from "fuse.js";

interface SelectOptionProps {
    optionKey: string;
    children: React.ReactNode;
}

export const SelectOption: React.FC<SelectOptionProps> =
    (props: SelectOptionProps): React.ReactElement<SelectOptionProps> => <React.Fragment>{props.children}</React.Fragment>

const itemSelected = (
    itemSelectedKey: string | undefined,
    children: React.ReactElement<SelectOptionProps>[]
): React.ReactElement => {
    const noItemSelected = <React.Fragment>No item selected!</React.Fragment>;
    if (itemSelectedKey === undefined) return noItemSelected;

    const selected = children.find(e => {
        return e.props.optionKey === itemSelectedKey;
    });

    return selected ? selected : noItemSelected;
};

const filterOptions = (
    searchQuery: string,
    children: React.ReactElement<SelectOptionProps>[]
): React.ReactElement<SelectOptionProps>[] => {
    if (!(searchQuery && searchQuery.length)) return children;

    const options = {
        shouldSort: true,
        tokenize: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["props.optionKey"]
    };

    const fuse = new Fuse(children, options);
    return fuse.search(searchQuery);
};

interface SelectProps {
    defaultOption?: string;
    children: React.ReactElement<SelectOptionProps>[];
}

export const Select: React.FC<SelectProps> = ({
    defaultOption,
    children = []
}: {
    defaultOption?: string;
    children: React.ReactElement<SelectOptionProps> | React.ReactElement<SelectOptionProps>[];
}): React.ReactElement => {
    const childrenArray: React.ReactElement<SelectOptionProps>[] = React.Children.toArray(children);

    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [itemSelectedKey, setItemSelectedKey] = useState(defaultOption);

    const filteredOptions = filterOptions(searchQuery, childrenArray);

    const [idx, setIdx] = useState(0);
    const filteredOptionsLength = filteredOptions.length || 0
    const filteredOptionsNonEmpty = filteredOptionsLength > 0 || false
    const itemActiveKey = (filteredOptionsNonEmpty && filteredOptions[idx].props.optionKey) || undefined

    const menuItemOptions: React.ReactElement<SelectOptionProps>[] = filteredOptions.map(child => {
        return (
            <MenuItem
                onKeyDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (event.key === "ArrowDown") {
                        console.log("MenuItem.onKeyDown.ArrowDown");
                        setIdx(i => (i + 1) % filteredOptionsLength);
                    } else if (event.key === "ArrowUp") {
                        console.log("MenuItem.onKeyDown.ArrowUp");
                        setIdx(i => (i - 1 + filteredOptionsLength) % filteredOptionsLength);
                    } else if (event.key === "Enter" && filteredOptionsNonEmpty) {
                        console.log("MenuItem.onKeyDown.Enter");
                        setItemSelectedKey(itemActiveKey);
                        setOpen(false);
                    } else {
                        console.log("MenuItem.onKeyDown.Other");
                    }
                }}
                id={child.props.optionKey}
                key={child.props.optionKey}
                eventKey={child.props.optionKey}
                active={itemActiveKey === child.props.optionKey}
                className={itemSelectedKey === child.props.optionKey ? "selected" : ""}
            >
                {child}
            </MenuItem>
        );
    });

    return (
        <Dropdown
            id="dropdown"
            open={open}
            onSelect={(eventKey: any) => {
                console.log("Dropdown.onSelect");
                setItemSelectedKey(eventKey);
            }}
            onToggle={(isOpen: boolean) => {
                console.log("Dropdown.onToggle");
                if (isOpen) {
                    setSearchQuery("");
                    setIdx(0);
                }
                setOpen(isOpen);
            }}
        >
            <Dropdown.Toggle
                noCaret
                className="btn btn btn-default"
            >
                <span className="filter-option pull-left">
                    {itemSelected(itemSelectedKey, childrenArray)}
                </span>
                <FontAwesomeIcon
                    style={{ margin: "0 10px" }}
                    icon={open ? faCaretUp : faCaretDown}
                    size="1x"
                />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <li key="search" role="presentation">
                    <FontAwesomeIcon
                        style={{ margin: "0 10px" }}
                        icon={faSearch}
                        size="1x"
                    />
                    <input
                        style={{ width: "75%" }}
                        role="menuitem"
                        type="text"
                        autoComplete="off"
                        placeholder="Organization name..."
                        aria-label="Search"
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)}
                        onSelect={e => e.stopPropagation()} // Allow selecting the input without closing the dropdown
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && filteredOptionsNonEmpty) {
                                console.log("Dropdown.Menu.input.onKeyDown.Enter");
                                event.preventDefault();
                                setItemSelectedKey(itemActiveKey);
                                setOpen(false);
                            } else {
                                console.log("Dropdown.Menu.input.onKeyDown.Other");
                            }
                        }}
                    />
                </li>
                <MenuItem divider />
                {menuItemOptions.length ? (
                    menuItemOptions
                ) : (
                        <li key="feedback" role="presentation">
                            <span style={{ margin: "10px", width: "220px", display: "block" }}>
                                No results matched "{searchQuery}"
                            </span>
                        </li>
                    )}
                {/* <MenuItem divider />
                <li key="search" role="presentation">
                    <a href="#add-new-organization">
                        <FontAwesomeIcon
                            style={{ margin: "0 10px 0 0" }}
                            icon={faPlus}
                            size="1x"
                        />
                        <span>Add new organization</span>
                    </a>
                </li> */}
            </Dropdown.Menu>
        </Dropdown>
    );
};
