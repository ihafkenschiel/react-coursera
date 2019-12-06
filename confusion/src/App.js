import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" expand="md">
        <NavbarBrand target="_blank" href="https://www.coursera.org/learn/front-end-react/supplement/HXLrI/introduction-to-react-additional-resources">Ristorante Con Fusion</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink target="_blank" href="https://reactstrap.github.io/components/navbar/">Reactstrap</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Empty Link</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
