import React from 'react';
import   './projects.css';
import {CollectionItem} from 'react-materialize'

const Project = ({name,manager,due_date,status,index,deleteProject}) =>{
   
    const getStatus = (due_date,project_status,otherClass)=>{
        var status = "";
        var dueDate = new Date(due_date);
        var currentDate = new Date();
        if(project_status==="finished"){
            const classes = "badge blue white-text "+otherClass;
            status =  (<span className={classes}>finished</span>);
        }
        else if(dueDate<currentDate && project_status==="unfinished"){
            const classes ="badge red white-text "+ otherClass;
            status =  (<span className={classes}>overdue</span>);
        }else{
            const classes = "badge green white-text status"+otherClass;
            status =  (<span className={classes}>ongoing</span>);
        }
        return status
    }
    
        var dueDate = new Date(due_date);
       
            
    return (

  
  <div>
            
          <CollectionItem className="row row_stick hide-on-small-only white" key={index} id={index}>
                <p className="col l2 m2 center row_stick"><p className="grey-text row_stick" id={index}>Project title</p>{name}</p>
                <p className="col l2 m1 center offset-l2 offset-m1 row_stick"><p className="grey-text row_stick">person</p>{manager}</p>
                <p className="col l2 m2 center offset-l1 offset-m1 row_stick"><p className="grey-text row_stick">due date</p>{dueDate.toLocaleDateString("en-NZ")}</p>
                <p className="col l1 m1 center offset-m1"><a  className="link small pointer"  onClick={()=>deleteProject(index)}>delete</a></p>
                <p className="col l1 m1 center offset-l1 offset-m2" key={index+"b"}>{ getStatus(due_date,status,"")}</p>
            </CollectionItem>
  </div>)
       
    
  
}

export default Project;
