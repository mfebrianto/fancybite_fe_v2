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
          <Nav className='fb-navbar-left'>
            <NavItem eventKey={1} href="#">Menu</NavItem>
            <NavItem eventKey={2} href="#" className='fb-nav-item-innder-left'>Download</NavItem>
          </Nav>
          <Nav pullRight className='fb-navbar-right'>
            <NavItem eventKey={1} href="#" className='fb-nav-item-innder-right'>Special</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopBarMenu;