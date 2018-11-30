import React, { Component } from 'react';
import NavBarStyle from   './NavBar.css';
import   './projects.css';
import {Button,NavItem,Dropdown,Navbar,Collection,CollectionItem,Modal, Input,Row} from 'react-materialize'
import SideNavBar from './SideNavBar';
import AddProjectForm from './AddProjectForm';
import Project from './Project';
const Projects = ({projects}) =>{
   
    const getStatus = (due_date,project_status,otherClass)=>{
        var dueDate = new Date(due_date);
        var currentDate = new Date();
        if(project_status=="finished"){
            const classes = "badge blue white-text "+otherClass;
            var status =  (<span className={classes}>finished</span>);
        }
        else if(dueDate<currentDate && project_status=="unfinished"){
            const classes ="badge red white-text "+ otherClass;
            var status =  (<span className={classes}>overdue</span>);
        }else{
            const classes = "badge green white-text status"+otherClass;
            var status =  (<span className={classes}>ongoing</span>);
        }
        return status
    }
    const getProjectsOnSmallScreen = (project,index)=>{
        var status = getStatus(project.due_date,project.status,"");
        var dueDate = new Date(project.dueDate);
        return(<Project small={true} name={project.name} due_date={project.due_date} manager={project.manager} status={project.status} small={false}/>
            );
       
    }
    const getProjects= (project,index)=>{
        var status = getStatus(project.due_date,project.status);
        var dueDate = new Date(project.dueDate);
        return(<Project name={project.name} due_date={project.due_date} manager={project.manager} status={project.status}/>
            );
    }
  
    const output = projects.length ? (projects.map(getProjects)): (<p className="center">"Nothing to do"</p>);
    const outputForSmall = projects.length ? (projects.map(getProjectsOnSmallScreen)): (<p className="center">"Nothing to do"</p>);
    return (

      <div className="container">
          <div className="row">
          <h4 className="grey-text text-darken-2 offset-l1" >Dashboard</h4>
          
          </div>
          <AddProjectForm />
          <Collection header="Projects" className ="hide-on-small-only">

          {output}
          
        
            </Collection>
            
            <table className="highlight responsive hide-on-med-and-up white">
                <thead>
                <tr>
                    <th>Project title</th>
                    <th>Person</th>
                    <th>Status</th>
                    <th>#</th>
                </tr>
                </thead>

                <tbody>
                    
                </tbody>
      </table>
      </div>
    );
  
}

export default Projects;
