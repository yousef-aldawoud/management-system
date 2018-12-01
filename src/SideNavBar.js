import React, { Component } from 'react';

import {SideNav,SideNavItem} from 'react-materialize'
import AddProjectForm from './AddProjectForm';
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
            <SideNavItem >Home</SideNavItem>
            <SideNavItem >Settings</SideNavItem>
            <SideNavItem >Log-out</SideNavItem>
            <SideNavItem divider />
        </div>
        <AddProjectForm addProject={this.props.addProject}/>
        <SideNavItem divider />

        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
        </SideNav>
      
    );
  }
}

export default SideNavBar;
