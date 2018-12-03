import React, { Component } from 'react';
import {SideNav,SideNavItem} from 'react-materialize'
import AddProjectForm from './AddProjectForm';
import {BrowserRouter , Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
class SideNavBar extends Component {
    props = {trigger:null};
    
    componentDidMount(){
    }
    
    render() {
    
    return (
        <SideNav
            className='.sidenav'
            trigger={this.props.trigger}

            options={{
                preventScrolling:false
            }}
        >
        <div className="hide-on-large-only" >
        <SideNavItem waves><NavLink to="/">Home</NavLink></SideNavItem>
        <SideNavItem waves><NavLink to="/dashboard">Dashboard</NavLink></SideNavItem>
            <SideNavItem divider />
        </div>
        <Route exact path="/dashboard" component={()=> <AddProjectForm addProject={this.props.addProject}/>} />
          
        

        <SideNavItem subheader>Subheader</SideNavItem>
        
        <SideNavItem waves><NavLink to="/contact-us">Contact-us</NavLink></SideNavItem>
        </SideNav>
      
    );
  }
}

export default SideNavBar;
