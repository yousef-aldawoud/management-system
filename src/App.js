import React, { Component } from 'react';
import NavBar from './NavBar';
import Projects from './Projects';
class App extends Component {
 state = {
  projects:[
    {name:"Zero Xl kk",manager:"Jhon",due_date:"10/7/2018",status:"finished"},
    {name:"Devolp a website",manager:"Macenize hohoho",due_date:"1/19/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"},
    {name:"Handle requests",manager:"Jesus Christ",due_date:"12/12/2018",status:"unfinished"},

]
 }
  render() {
    return (
      <div > 
        <NavBar/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
