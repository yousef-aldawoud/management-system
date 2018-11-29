import React, { Component } from 'react';
import NavBarStyle from   './NavBar.css';
import {Button,NavItem,Dropdown,Navbar} from 'react-materialize'
import SideNavBar from './SideNavBar';
class NavBar extends Component {
   state ={
    sideNaveTrigger :false,
    inline : {
      'vertical-align': 'bottom',
      'font-size': '18px !important'
   }
  }
  openSideNavBar(e){
    e.preventDefault();
    console.log("inine icon"+NavBarStyle.inline_icon);
    this.setState({sideNaveTrigger:!this.state.sideNaveTrigger});
  }
  render() {
    
    console.log("inine icon "+NavBarStyle);
    return (
      <div>
        
        
      <nav >
      <div className="nav-wrapper blue lighten-2 row NavBar">
      
      <SideNavBar trigger={<a data-activates="mobile-demo" className="button-collapse show-on-large l1"><i className="material-icons">menu</i></a>}/>
      

      <a href="#" className=" brand-logo left col s6 m1 l2">Logo</a>
      

      <ul id="nav-mobile" className="right hide-on-med-and-down col l4">
            
        <li><a href="badges.html">Components</a></li>
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
