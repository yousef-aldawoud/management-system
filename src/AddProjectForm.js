import React, { Component } from 'react';
import NavBarStyle from   './NavBar.css';
import $ from 'jquery'; 
import   './projects.css';
import {SideNavItem,Modal, Input,Row} from 'react-materialize'
import SideNavBar from './SideNavBar';
class AddProjectForm extends Component{
    
    project = {
        name:null,
        manager:null,
        due_date:null,
        status:null

    }
    constructor(props){
        super(props);    
        this.myRef = React.createRef();
    
    }
    handleChange = (e)=>{
    console.log(e.target.value);
    this.project[e.target.id]=e.target.value
    
    console.log(this.project)

    }
    addProject = (e) =>{
        e.preventDefault();
        this.props.addProject(this.project);
        $('.modal-close').trigger('click');
    }
    render(){
        return(
            <Modal  id="modal" header='Add project' 
             ref={(el) => this.modal = el}
                actions={this.submitButton}
                trigger={<SideNavItem href='#' key="add-project-trigger">Add new Project</SideNavItem>}
                >
                <div className="modal-content">
                    <form action="#" onSubmit={this.addProject}>
                    <Row>
                        <Input placeholder="Project 678" s={6} label="Title" id="name" onChange={this.handleChange}/>
                        <Input name='on' placeholder="Pick a date" type='text' s={6} id="due_date" onChange={this.handleChange}/>
                    </Row>
                    <br/>
                    <Row>    
                        <Input s={6} placeholder="John Smith" label="Manager name" id="manager" onChange={this.handleChange}/>
                        <Input s={6} type='select' label="Select status" id="status" onChange={this.handleChange} >
                            <option value='finished'>finished</option>
                            <option value='unfinished'>unfinished</option>
                        </Input>
                    </Row>
                    <br/>
                    <button  type="submit" className="col btn s6-offset">Add</button>
                    </form>
                    </div>
            </Modal>
        )
    }
}
export default AddProjectForm;