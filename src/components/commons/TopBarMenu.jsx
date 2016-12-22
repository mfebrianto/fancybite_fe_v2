import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopBarMenu extends React.Component {

  render(){
    return (
      <Navbar collapseOnSelect className='fb-navbar'>
        <div className='fb-navbar-logo'/>
        <Navbar.Header>
          <Navbar.Toggle className='fb-navbar-toggle'/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopBarMenu;