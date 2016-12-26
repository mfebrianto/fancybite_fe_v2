import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopBarMenu extends React.Component {

  render(){
    return (
      <div>
        <Navbar collapseOnSelect className='fb-navbar'>
          <div className='fb-navbar-logo'/>
          <Navbar.Header>
            <Navbar.Toggle className='fb-navbar-toggle'/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className='fb-navbar-left'>
              <NavItem eventKey={1} href="#">MENU</NavItem>
              <NavItem eventKey={2} href="#" className='fb-nav-item-innder-left'>DOWNLOAD</NavItem>
            </Nav>
            <Nav pullRight className='fb-navbar-right'>
              <NavItem eventKey={1} href="#" className='fb-nav-item-innder-right'>SPECIAL</NavItem>
              <NavItem eventKey={2} href="#">CONTACT</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='wave-border'>
        </div>
      </div>
    )
  }
}

export default TopBarMenu;