import React from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Select2 } from './Select2';
import '@codacy/stylesheets';

export const Header = () => {
    return (
        <Navbar inverse={true} fluid={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#project-dropdown"><img src="images/codacy-white.svg" alt="codacy-logo" /></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <Select2 options={[
                        { value: 'codacy', label: 'Codacy' },
                        { value: 'code-climate', label: 'Code Climate' }
                    ]} isMulti={false} isNavbar={true} />
            </Nav >
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Docs
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Admin
                </NavItem>
                <React.Fragment>{/* <React.Fragment /> required to swallow NavItem injected activeKey, activeHref prop */}
                    <li role="presentation">
                        <div className="navbar-btn">
                            <Button bsStyle="primary" href="#">Sign up</Button>
                        </div>
                    </li>
                </React.Fragment>
                <NavDropdown eventKey={3} id="organization-dropdown"
                    title={<img src="https://secure.gravatar.com/avatar/fa4dbf28653d739aae161f3532225878?s=256&d=https://s3-eu-west-1.amazonaws.com/codacy-public-assets/default-user-1.png" alt="User Gravatar"/>}>
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <li role="presentation">
                        <form action="/logout" method="POST" id="logoutForm">
                            <input type="hidden"
                                name="csrfToken"
                                value="4ae8220f83157d735137ce7a762917ba7a4917f6-1511345663270-1ef6729026175f7916b3132e" />
                            <a id="signout-form" href="#organization-dropdown"><i className="fa fa-sign-out"></i> Sign Out</a>
                        </form>
                    </li>
                </NavDropdown>
            </Nav>
        </Navbar >
    );
};