import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import WavyBottom from './WavyBottom';

const TopNavbar = props => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>JH</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer to="/tools">
                                <Nav.Link>Tools</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/experience">
                                <Nav.Link>Experience</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <WavyBottom />
        </div>
    );
};

export default TopNavbar;