import React, { Component } from 'react';
import $ from 'jquery'; 
import   './projects.css';
import {SideNavItem,Modal, Input,Row} from 'react-materialize'
class AddProjectForm extends Component{
    
    state = {
        name:null,
        manager:null,
        due_date:null,
        status:"finished"

    }
    handleChange = (e)=>{
        this.setState({[e.target.id]:e.target.value});
        
        console.log(this.state)
    }
    addProject = (e) =>{
        e.preventDefault();;
        this.props.addProject(this.state);
        $('.modal-close').trigger('click');
    }
    render(){
        return(
            <Modal  id="modal" header='Add project' 
                actions={this.submitButton}
                trigger={<SideNavItem href='#' key="add-project-trigger" icon="add"><p>Add new Project</p></SideNavItem>}
                >
                <div className="modal-content">
                    <form action="#" onSubmit={this.addProject}>
                    <Row>
                        <Input placeholder="Project 678" s={6} label="Title" id="name" onChange={this.handleChange}/>
                        <Input name='on' placeholder="Pick a date" type='date' s={6} id="due_date" onChange={this.handleChange}/>
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