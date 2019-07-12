import React from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import 'codacy-stylesheets';

export const Header = () => {
    return (
        <Navbar inverse={true} fluid={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><img src="images/codacy-white.svg" alt="codacy-logo" /></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavDropdown eventKey={1} title="Codacy" id="organization-dropdown">
                    <MenuItem eventKey={1.1}>Codacy 2</MenuItem>
                    <MenuItem eventKey={1.2}>Codacy 3</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={2} title="My Projects" id="project-dropdown">
                    <MenuItem eventKey={2.1}>Rodrigo Fernandes</MenuItem>
                    <MenuItem eventKey={2.2}>Rafael Cortes</MenuItem>
                    <MenuItem divider={true} />
                    <MenuItem eventKey={2.3}><span className="fa fa-plus"></span> Add new project</MenuItem>
                </NavDropdown>
            </Nav >
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Docs
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Admin
                </NavItem>
                <li role="presentation">
                    <div className="navbar-btn">
                        <Button bsStyle="primary" href="#">Sign up</Button>
                    </div>
                </li>
                <NavDropdown eventKey={3} id="organization-dropdown"
                    title={<img src="https://secure.gravatar.com/avatar/fa4dbf28653d739aae161f3532225878?s=256&d=https://s3-eu-west-1.amazonaws.com/codacy-public-assets/default-user-1.png"/>}>
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <li role="presentation">
                        <form action="/logout" method="POST" id="logoutForm">
                            <input type="hidden"
                                name="csrfToken"
                                value="4ae8220f83157d735137ce7a762917ba7a4917f6-1511345663270-1ef6729026175f7916b3132e"/>
                            <a id="signout-form" href="#"><i className="fa fa-sign-out"></i> Sign Out</a>
                        </form>
                    </li>
                </NavDropdown>
            </Nav>
        </Navbar >
    );
};