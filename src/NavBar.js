import React, { Component } from 'react';
import {Button,NavItem,Dropdown} from 'react-materialize'
class NavBar extends Component {

  render() {
    
    return (
      <div>
          
      <nav className="blue lighten-2">
    <div className="nav-wrapper container">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
          
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      
            <Dropdown trigger={
                <Button>Drop me!</Button>
            }>
                <NavItem>settings</NavItem>
                <NavItem>prefrence</NavItem>
                <NavItem divider />
                <NavItem>log-out</NavItem>
            </Dropdown>
      </ul>
    </div>
  </nav>
     
      </div>
    );
  }
}

export default NavBar;
