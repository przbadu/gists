import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Gists</Link>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default Navigation;
