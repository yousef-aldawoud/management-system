import React, { Component } from 'react';
import NavBarStyle from   './NavBar.css';
import   './projects.css';
import {Button,NavItem,Dropdown,Navbar,Collection,CollectionItem} from 'react-materialize'
import SideNavBar from './SideNavBar';
class Projects extends Component {
   state ={
   
    }
    getProjects(project,index){
        var dueDate = new Date(project.due_date);
        var currentDate = new Date();
        if(project.status=="finished"){
            var status =  (<span className="badge blue white-text status">finished</span>);
        }
        else if(dueDate<currentDate && project.status=="unfinished"){
            var status =  (<span className="badge red white-text status">overdue</span>);;
        }else{
            var status = (<span className="badge green white-text status"><div>ongoing</div></span>);
        }
        
        return(
          <CollectionItem className="row row_stick white">
                <p className="col s2 center row_stick"><p className="grey-text row_stick">Project title</p>{project.name}</p>
                <p className="col s2 center offset-s3 row_stick"><p className="grey-text row_stick">person</p>{project.manager}</p>
                <p className="col s1 center offset-s1 row_stick"><p className="grey-text row_stick">due date</p>{dueDate.toLocaleDateString("en-NZ")}</p>
                <p className="col s2 center offset-s1">{status}<a href="#" className="link small">details</a></p>
            </CollectionItem>
            );
    }
  render() {
      this.output = this.props.projects.length ? (this.props.projects.map(this.getProjects)): (<p className="center">"Nothing to do"</p>);
    return (
      <div className="container">
          <div className="row">
          <h4 className="grey-text text-darken-2 offset-l1" >Dashboard</h4>
          </div>
          <Collection header='Projects'>
          
          {this.output}
          
        
            </Collection>
            
      </div>
    );
  }
}

export default Projects;
