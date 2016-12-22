import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopBarMenu extends React.Component {

  render(){
    return (
      <Navbar className='fb-navbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <div className='navbar-logo'/>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default TopBarMenu;