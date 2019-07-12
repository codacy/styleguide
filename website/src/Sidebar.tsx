import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Collapse } from 'react-bootstrap';
import 'codacy-stylesheets';

export const Sidebar = () => {
    const [open, setOpen] = useState(false)

    return (
        <ListGroup className="side-menu">
            <ListGroupItem href="/css-guidelines.html">
            CSS/SASS guidelines
            </ListGroupItem>
            <ListGroupItem href="/css-guidelines.html">
            Layout
            </ListGroupItem>
            <ListGroupItem onClick={() => setOpen(!open)}>
                Components <i className={open ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
            </ListGroupItem>
            <Collapse in={open}>
                <div>
                    <ListGroupItem href="#colors">
                        Colour palette
                    </ListGroupItem>
                    <ListGroupItem href="#typo">
                        Typography
                    </ListGroupItem>
                    <ListGroupItem href="#buttons">
                        Buttons
                    </ListGroupItem>
                    <ListGroupItem href="#forms">
                        Forms
                    </ListGroupItem>
                    <ListGroupItem href="#alerts">
                        Alerts
                    </ListGroupItem>
                    <ListGroupItem href="#panels">
                        Panels
                    </ListGroupItem>
                    <ListGroupItem href="#progress-bar">
                        Progress Bars
                    </ListGroupItem>
                    <ListGroupItem href="#tables">
                        Tables
                    </ListGroupItem>
                    <ListGroupItem href="#deltas">
                        Deltas
                    </ListGroupItem>
                    <ListGroupItem href="#navbar">
                        Navigation
                    </ListGroupItem>
                    <ListGroupItem href="#pagination">
                        Pagination
                    </ListGroupItem>
                </div>
            </Collapse>
        </ListGroup>
    );
};