import React, { Component } from 'react';
import NavBarStyle from   './NavBar.css';
import   './projects.css';
import {Button,NavItem,Dropdown,Navbar,Collection,CollectionItem} from 'react-materialize'
import SideNavBar from './SideNavBar';
const Projects = ({projects}) =>{
   
    const getStatus = (due_date,project_status)=>{
        var dueDate = new Date(due_date);
        var currentDate = new Date();
        if(project_status=="finished"){
            var status =  (<span className="badge blue white-text status">finished</span>);
        }
        else if(dueDate<currentDate && project_status=="unfinished"){
            var status =  (<span className="badge red white-text status">overdue</span>);;
        }else{
            var status = (<span className="badge green white-text status"><div>ongoing</div></span>);
        }
        return status
    }
    const getProjectsOnSmallScreen = (project,index)=>{
        var status = getStatus(project.due_date,project.status);
        var dueDate = new Date(project.dueDate);
        return(
            <tr>
            <td>{project.name}</td>
            <td>{project.manager}</td>
            <td>{status}</td>
            <td><a className="link" href="#">details</a></td>
          </tr>
        )
       
    }
    const getProjects= (project,index)=>{
        var status = getStatus(project.due_date,project.status);
        var dueDate = new Date(project.dueDate);
        return(
          <CollectionItem className="row row_stick white" key={index}>
                <p className="col l2 m2 center row_stick"><p className="grey-text row_stick">Project title</p>{project.name}</p>
                <p className="col l2 m2 center offset-l2 offset-m1 row_stick"><p className="grey-text row_stick">person</p>{project.manager}</p>
                <p className="col l2 m2 center offset-l1 offset-m1 row_stick"><p className="grey-text row_stick">due date</p>{dueDate.toLocaleDateString("en-NZ")}</p>
                <p className="col l1 m1 center offset-l1 offset-m1"><a href="#" className="link small">details</a></p>
                <p className="col l1 m1 center offset-m1">{status}</p>
            </CollectionItem>
            );
    }
  
    const output = projects.length ? (projects.map(getProjects)): (<p className="center">"Nothing to do"</p>);
    const outputForSmall = projects.length ? (projects.map(getProjectsOnSmallScreen)): (<p className="center">"Nothing to do"</p>);
    return (
      <div className="container">
          <div className="row">
          <h4 className="grey-text text-darken-2 offset-l1" >Dashboard</h4>
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
