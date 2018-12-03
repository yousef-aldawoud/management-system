import React, { Component } from 'react';
import './contact.css';
import {NavLink} from 'react-router-dom';
class App extends Component {
 
  render() {
    return ( 
            <footer className="page-footer grey darken-3">
                <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                    <h5 className="white-text">WOLLO</h5>
                    <p>manage your projects with few clicks</p>
                    <p>Save time with us</p>
                    <b>Create your own projects</b>
                    </div>
                    <div className="col offset-l1 l2 s12">
                        <h5 className="white-text">Explore</h5>
                        <ul>
                            <li><NavLink className="grey-text text-lighten-3" to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink className="grey-text text-lighten-3" to="/contact-us">Contact-us</NavLink></li>
                        </ul>
                    </div>
                    
                    <div className="col offset-l1 l2 s12">
                        <h5 className="white-text">Follow</h5>
                        <ul>
                            <li > <a  className="white-text" href="https://twitter.com/" ><i className="fa fa-twitter fa-lg "></i>  twitter</a></li>
                            <li style={{marginTop:10}}><a  className="white-text" href="https://instagram.com/"><i className="fa fa-instagram fa-lg "></i>  twitter</a></li>
                            <li style={{marginTop:10}}><a  className="white-text" href="https://youtube.com/"><i className="fa fa-youtube fa-lg "></i>  twitter</a></li>
                            <li style={{marginTop:10}}><a  className="white-text" href="https://facebook.com/"><i className="fa fa-facebook fa-lg "></i>  twitter</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="footer-copyright grey darken-4">
                <div className="container">
                © 2018 Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Privacy & terms</a>
                </div>
            </div>
        </footer>
        );
    }
}

export default App;
