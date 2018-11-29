import React, { Component } from 'react';

import {Button,SideNav,SideNavItem} from 'react-materialize'
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
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
        </SideNav>
      
    );
  }
}

export default SideNavBar;
