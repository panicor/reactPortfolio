import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';


import "./index.css"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar light expand="md" className="px-3 py-4 nav-bar">
        <NavbarBrand href="/" className="nav-brand">Rachel Panico</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar  className="nav-link-group">
          <Nav navbar>
            <NavItem className="nav-items">
              <Link to="/" className="nav-links">Home</Link>
              <Link to="/contact" className="nav-links">Contact</Link>
              <Link to="/resume" className="nav-links">Resume</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;