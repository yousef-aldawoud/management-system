import React, { Component } from 'react';
import NavBar from './NavBar';
import Projects from './Projects';
import AddProjectForm from "./AddProjectForm";
class App extends Component {
 constructor(props){
   super(props);
   this.projects=[
    {name:"Zero Xl kk",manager:"Jhon",due_date:"10/7/2018",status:"finished"},
    {name:"Devolp a website",manager:"Macenize hohoho",due_date:"1/19/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"},

  ]
  
 }
  state = {
  projects:[
    {name:"Zero Xl kk",manager:"Jhon",due_date:"10/7/2018",status:"finished"},
    {name:"Devolp a website",manager:"Macenize hohoho",due_date:"1/19/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"},

]
 }
 addProject = (obj) =>{
  const newProject =[...this.state.projects,obj];
  console.log(newProject);
  this.setState({projects:newProject});
  window.Materialize.toast('Added new Project!', 4000);
}
  render() {
    var obj= {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"};
  const newProject =[...this.state.projects,obj];
  console.log(newProject);
  this.setState({projects:newProject})
    return (
      <div > 
        <NavBar addProject={this.addProject}/>
        
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
