import React, { Component } from 'react';
import './contact.css';
import {NavLink} from 'react-router-dom';
class App extends Component {
 
  render() {
    return ( 
            <footer class="page-footer grey darken-3">
                <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                    <h5 class="white-text">WOLLO</h5>
                    <p>manage your projects with few clicks</p>
                    <p>Save time with us</p>
                    <b>Create your own projects</b>
                    </div>
                    <div class="col offset-l1 l2 s12">
                        <h5 class="white-text">Explore</h5>
                        <ul>
                            <li><NavLink class="grey-text text-lighten-3" to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink class="grey-text text-lighten-3" to="/contact-us">Contact-us</NavLink></li>
                        </ul>
                    </div>
                    
                    <div class="col offset-l1 l2 s12">
                        <h5 class="white-text">Follow</h5>
                        <ul>
                            <li > <a  className="white-text" href="https://twitter.com/" ><i class="fa fa-twitter fa-lg "></i>  twitter</a></li>
                            <li style={{marginTop:10}}><a  className="white-text" href="https://instagram.com/"><i class="fa fa-instagram fa-lg "></i>  twitter</a></li>
                            <li style={{marginTop:10}}><a  className="white-text" href="https://youtube.com/"><i class="fa fa-youtube fa-lg "></i>  twitter</a></li>
                            <li style={{marginTop:10}}><a  className="white-text" href="https://facebook.com/"><i class="fa fa-facebook fa-lg "></i>  twitter</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="footer-copyright grey darken-4">
                <div class="container">
                © 2018 Copyright Text
                <a class="grey-text text-lighten-4 right" href="#!">Privacy & terms</a>
                </div>
            </div>
        </footer>
        );
    }
}

export default App;
