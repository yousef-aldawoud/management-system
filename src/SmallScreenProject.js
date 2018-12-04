import React from 'react';
import   './projects.css';
const Project = ({name,manager,due_date,status,index,deleteProject}) =>{
   
    const getStatus = (due_date,project_status,otherClass)=>{
        var dueDate = new Date(due_date);
        var currentDate = new Date();
        if(project_status ==="finished"){
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
    
        
            
    return (
            <tr key={index}>
                <td>{name}</td>
                <td>{manager}</td>
                <td>{getStatus(due_date,status,"")}</td>
                <td><a className="link" href={"#"+index} onClick={()=>deleteProject(index)}>details</a></td>
              </tr>)
  
       
    
  
}

export default Project;
