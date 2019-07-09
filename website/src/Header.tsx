import React from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './styles/stylesheet/template.min.css';

export const Header = () => {
    return (
        <Navbar inverse={true} fluid={true}>
            <Navbar.Collapse>
                <Nav eventKey={1}>
                    <NavItem eventKey={1.1} href="#">
                        <img src="images/codacy-white.svg" alt="codacy-logo" />
                    </NavItem>
                    <NavItem eventKey={1.2} href="#">
                        <NavDropdown eventKey={2} title="Organization dropdown" id="organization-dropdown">
                            <MenuItem eventKey={2.1}>Codacy</MenuItem>
                            <MenuItem eventKey={2.2}>Codacy 2</MenuItem>
                            <MenuItem eventKey={2.3}>Codacy 3</MenuItem>
                        </NavDropdown>
                    </NavItem>
                    <NavItem eventKey={1.3} href="#">
                        <NavDropdown eventKey={3} title="Project dropdown" id="project-dropdown">
                            <MenuItem eventKey={3.1}>My Projects</MenuItem>
                            <MenuItem eventKey={3.2}>Rodrigo Fernandes</MenuItem>
                            <MenuItem eventKey={3.3}>Rafael Cortes</MenuItem>
                            <MenuItem divider={true} />
                            <MenuItem eventKey={3.4}>Add new project</MenuItem>
                        </NavDropdown>
                    </NavItem>
                </Nav >
                <Nav eventKey={2} pullRight>
                    <NavItem eventKey={2.1} href="#">
                        Docs
                        </NavItem>
                    <NavItem eventKey={2.2} href="#">
                        Admin
                        </NavItem>
                    <NavItem eventKey={2.2} href="#">
                        <div className="navbar-btn">
                            <a className="btn btn-primary" href="#">Sign up</a>
                        </div>
                    </NavItem>
                    <NavItem eventKey={1.2} href="#">
                        <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <img
                                src="https://secure.gravatar.com/avatar/fa4dbf28653d739aae161f3532225878?s=256&d=https://s3-eu-west-1.amazonaws.com/codacy-public-assets/default-user-1.png"
                            />
                            <i className="fa fa-chevron-down caret" aria-hidden="true"></i>
                        </a>
                        <NavDropdown eventKey={2} title="" id="organization-dropdown">
                            <MenuItem eventKey={2.1}>Action</MenuItem>
                            <MenuItem eventKey={2.2}>Another action</MenuItem>
                            <MenuItem eventKey={2.3}>Something else here</MenuItem>
                            <MenuItem eventKey={2.4}>
                                <form action="/logout" method="POST" id="logoutForm">
                                    <input
                                        type="hidden"
                                        name="csrfToken"
                                        value="4ae8220f83157d735137ce7a762917ba7a4917f6-1511345663270-1ef6729026175f7916b3132e"
                                    /><a id="signout-form" href="#">
                                        <i className="fa fa-sign-out"></i> Sign Out
                            </a>
                                </form>
                            </MenuItem>
                        </NavDropdown>
                    </NavItem>
                </Nav>
            </Navbar.Collapse >
        </Navbar >
    );
};