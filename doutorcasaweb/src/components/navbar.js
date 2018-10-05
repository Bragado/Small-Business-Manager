
import  React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import './navbar.css';

export class NavB extends Component {

    constructor(props) {
        super(props);


    }

    render() {


        return(
            <Navbar inverse collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
        <a href="#brand">Doutor Casa</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>

        <Nav pullRight>
        <NavItem eventKey={1} href="#">
            Quem Somos
        </NavItem>
        <NavItem eventKey={2} href="#">
            Trabalhos
        </NavItem>
            <NavItem eventKey={2} href="#">
            Contactos
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    }

    handleLoginUpdate(state) {
        this.props.updateLogin(state);
    }
}

export default NavB;

