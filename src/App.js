import React, { Component } from 'react';
import NavBar from './NavBar';
import {BrowserRouter , Route} from 'react-router-dom';
import Projects from './Projects';
import ContactUs from './ContactUs';

class App extends Component {
 
  state = {
    projectSortMethod:"name",
  projects:[
    {name:"Zero Xl kk",manager:"Jhon",due_date:"10/7/2018",status:"finished"},
    {name:"Devolp a website",manager:"Macenize hohoho",due_date:"1/1/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"}

]
 }




 addProject = (obj) =>{
  const newProject =[...this.state.projects,obj];
  this.setState({projects:newProject});
  window.Materialize.toast('Added new Project!', 4000);
}

  sortProjects = (method) =>{
    var newProjects = this.state.projects;
    if(method==="name"){
      newProjects.sort(this.compareNameMethod);
      this.setState({projectSortMethod:"name"});
    }else if(method==="date"){
      newProjects.sort(this.compareDateMethod);
      this.setState({projectSortMethod:"date"});
      
    }
    console.log(newProjects);
    this.setState({projects:newProjects});
    
  }

  compareNameMethod = (a,b) =>{
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
  }

  compareDateMethod = (a,b) =>{
    return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
  }
  
  render() {
  return (
      <BrowserRouter>
        <div>
          <NavBar addProject={this.addProject}/>
          <Route exact path="/dashboard" component={()=> <Projects projects = {this.state.projects} sortProjects={this.sortProjects}/>} />
          <Route exact path="/contact-us" component={ContactUs} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
