import React from 'react';
import   './projects.css';
import {Collection} from 'react-materialize'
import Project from './Project';
import SmallScreenProject from './SmallScreenProject';
const Projects = ({projects,sortProjects}) =>{
   
    
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
          <b><a className="grey-text col m5" id={"name"} onClick={sortByNameProjects}><span className="material-icons " >insert_drive_file</span><span className="hide-on-small-only"> By Project name</span> <span className="hide-on-med-and-up"> By name</span></a></b>
          
          <b><a className="grey-text col m5" id={"date"} onClick={sortByDateProjects}><span className="material-icons center-icon">date_range</span> <span className="hide-on-small-only"> By Project date</span> <span className="hide-on-med-and-up"> By date</span></a></b>
          
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
