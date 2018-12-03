import React, { Component } from 'react';
import './contact.css';

import {Tab,Tabs,Card,CardTitle} from 'react-materialize'
import { Parallax, Background } from 'react-parallax';
class App extends Component {
    
  render() {
    return (
            <div>
        <Parallax strength={500}>
            <br/>
            <Background className="custom-bg">
                <img src={require('./imgs/home_background.jpg')} alt="fill murray" height={1500} width={"fill"} />
            </Background>
            <div className="container">
                
            <div className="row">            
                <div>
                    <div className="col s12 m6 offset-m6">    
                        <div className="card white darken-1 center">
                            <div className="row">
                                
                                <div className="col s12 card-content">
                                        <Tabs className='tab-demo row'>
                                            <Tab title="Sign-up" className="col s5 offset-s1" >
                                    <form>
                                            <div className="row">
                                        <div className="input-field col s10 offset-s1">
                                            <input id="first_name" type="text" className="validate"/>
                                            <label for="first_name">Name</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s10 offset-s1">
                                            <input  id="email" type="email" className="validate"/>
                                            <label for="E-mail">E-mail</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s10 offset-s1">
                                        <input  id="email" type="password" className="validate"/>
                                            <label for="message">password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                            <button className="btn col s8 offset-s2 ">Sign-up</button>
                                    </div>
                                    </form>
                                            </Tab>
                                            <Tab title="Log-in" className="col s5 offset-s1" active>
                                    <form>
                                        <div className="row">
                                            <div className="input-field col s10 offset-s1">
                                                <input  id="email" type="email" className="validate"/>
                                                <label for="E-mail">E-mail</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 offset-s1">
                                            <input  id="email" type="password" className="validate"/>
                                                <label for="message">password</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                                <button className="btn col s8 offset-s2 ">Log in</button>
                                        </div>
                                    </form>
                                    
                                            </Tab>
                                        </Tabs>    
                                    </div>
                                    
                                    
                                </div>
                        </div>
                    </div>
                
            </div>
            </div>

            

            </div>
        </Parallax>

        <div className="container" style={{marginTop:20}}>
        <div className="row">
            <div className="col s12 l4">
            <img src={require("./imgs/analytics.jpg")} alt="" className="responsive-img materialboxed"/>
        </div>
        <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text-darken-4">Functional</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l4 offset-l1 push-l7">
          <img src={require("./imgs/city.jpg")} alt="" className="responsive-img materialboxed"/>
      </div>
      <div className="col s12 l6 offset-l1 pull-l5 right-align">
        <h2 className="indigo-text text-darken-4">Speed</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>
    </div>

    <Parallax 
    blur={{ min: -15, max: 15 }}
            bgImage={require('./imgs/charts-background.jpg')}
            bgImageAlt="the dog"
            strength={500}
    >
    <div style={{ height: '400px' }} />
    </Parallax>
    <div className="container">
    <h3>Our partners</h3>
        <div className="row">
            <Card className='col s12 l3'
                header={<CardTitle image={require('./imgs/google.jpg')}>Google</CardTitle>}
                actions={[<a href='#'>Read more</a>]}>
                Yeah I know it ain't gonna happen but what do you know I got you reading this text.
            </Card>
            <Card className='col s12 l3 offset-l1'
                header={<CardTitle image={require('./imgs/facebook.jpg')}>Facebook</CardTitle>}
                actions={[<a href='#'>Read more</a>]}>
                They approched us and said hey wana make a site and I said no but then the alarm woke me up 
            </Card>
            
            <Card className='col s12 l3 offset-l1'
                header={<CardTitle image={require('./imgs/facebook.jpg')}>Instagaram</CardTitle>}
                actions={[<a href='#'>Read more</a>]}>
                Now I know that instagram belongs to facebook but I am just desgining a website with no partners :(
            </Card>

        </div>
    </div>
    
            </div>
        );
    }
}

export default App;
