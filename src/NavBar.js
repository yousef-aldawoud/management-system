import React, { Component } from 'react';
import NavBarStyle from   './NavBar.css';
import {NavItem,Dropdown} from 'react-materialize'
import SideNavBar from './SideNavBar';
import {NavLink} from 'react-router-dom';
class NavBar extends Component {
  
  render() {
    return (
      <div>
        
        
      <nav >
      <div className="nav-wrapper blue lighten-2 row NavBar">
      
      <SideNavBar addProject={this.props.addProject} trigger={<a herf="#" data-activates="mobile-demo" className="button-collapse show-on-large l1"><i className="material-icons">menu</i></a>}/>
      

      <a  className=" brand-logo left col s6 m1 l2">Logo</a>
      

      <ul id="nav-mobile" className="right hide-on-med-and-down col l4">
            
        <li><NavLink to="/dashboard">Dashborad</NavLink></li>
         <li><Dropdown trigger={
           
                <a herf="#" className="btn transparent z-depth-0">email ⯆</a>
            }>
                <NavItem>settings</NavItem>
                <NavItem>prefrence</NavItem>
                <NavItem divider />
                <NavItem>log-out</NavItem>
            </Dropdown></li>

      </ul>
      
      <form className=" hide-on-small-only center-align col m6 l4" id="form1" >
        <div className="input-field"  >
          <input placeholder="Search" id="search" type="search" required/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
          <div id="searchResults" ></div>
        </div>
      </form>
    </div>
  </nav>
     
      </div>
    );
  }
}

export default NavBar;
