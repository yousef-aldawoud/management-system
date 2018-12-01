import React, { Component } from 'react';
import NavBarStyle from   './NavBar.css';
import   './projects.css';
import {Button,NavItem,Dropdown,Navbar,Collection,CollectionItem,Modal, Input,Row} from 'react-materialize'
import SideNavBar from './SideNavBar';
import AddProjectForm from './AddProjectForm';
import Project from './Project';
import SmallScreenProject from './SmallScreenProject';
const Projects = ({projects,sortProjects}) =>{
   
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
        return(<SmallScreenProject name={project.name} due_date={project.due_date} manager={project.manager} status={project.status} small={false}/>
            );
       
    }
    const sortByNameProjects = (e)=>{
        e.preventDefault();
        sortProjects("name");
    }
    const sortByDateProjects = (e)=>{
        e.preventDefault();
        sortProjects("date");
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
          <h4 className="grey-text text-darken-2 offset-l1 " >Dashboard</h4>
        

          
          </div>
          <div className="row container">
          <b><a href="#" className="grey-text col m5" id={"name"} onClick={sortByNameProjects}><span className="material-icons " >insert_drive_file</span><span className="hide-on-small-only"> By Project name</span> <span className="hide-on-med-and-up"> By name</span></a></b>
          
          <b><a href="#" className="grey-text col m5" id={"date"} onClick={sortByDateProjects}><span className="material-icons center-icon">date_range</span> <span className="hide-on-small-only"> By Project date</span> <span className="hide-on-med-and-up"> By date</span></a></b>
          
          </div>
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
                    {outputForSmall}
                </tbody>
      </table>
      </div>
    );
  
}

export default Projects;
