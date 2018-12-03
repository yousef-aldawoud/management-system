import React, { Component } from 'react';
import './contact.css';
class App extends Component {
 
  render() {
    return (
            <div className="container">        
                <h4 className="grey-text text-darken-2 offset-l1 " >Contact-us</h4>
                <div className="row">
                    <div className="col s12 m6">    
                        <div className="card white darken-1 center">
                            <span class="card-title">Contact us</span>
                            <div className="row">
                                <form className="col s12 card-content">
                                    <div className="row">
                                        <div className="input-field col s10 offset-s1">
                                            <input id="first_name" type="text" class="validate"/>
                                            <label for="first_name">Name</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s10 offset-s1">
                                            <input  id="email" type="email" class="validate"/>
                                            <label for="E-mail">E-mail</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s10 offset-s1">
                                            <textarea id="message" class="materialize-textarea" data-length="2000"></textarea>
                                            <label for="message">Your message </label>
                                        </div>
                                    </div>
                                    <div class="row">
                                            <button className="btn col s8 offset-s2 ">Send</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    
                <div id="contact-details" className="col s12 m6">
                    <h4 className="center grey-text text-darken-2">Contact details</h4>
                    <hr className="center" width="90%"/>
                    
                    <div className="row">
                        <i className="small blue-text text-lighten-2 material-icons col s2 offset-s1 icon-center" >location_on</i>
                        <div className="col s8 center flow-text">Our office loc, 145 <br/>street city country</div>
                    </div>
                    <div className="row">
                        <i className="small purple-text text-lighten-2 material-icons col s2 offset-s1 icon-center">phone</i>
                        <a className="col s8 center flow-text" href="tel:01101110111">(011)-0111-0111</a>
                    </div>
                    <br/>
                    <div className="row">
                        <i className="small material-icons red-text text-lighten-2 col s2 offset-s1 icon-center" >mail</i>
                        <a href="mailto:fakeemail@fakeemail.com" className="col s8 center flow-text">fakeemail@fakeemail.com</a>
                    </div>
                    <hr className="center icon-center" width="80%"/>
                    <br/>
                    <div className="row">
                        <a class="fa fa-twitter fa-2x black-text col s1 offset-s2 icon-center" href="https://twitter.com/"></a>
                        <a class="fa fa-facebook fa-2x blue-text text-darken-1 col s1 icon-center offset-s1" href="https://facebook.com/"></a>
                        <a class="fa fa-instagram fa-2x black-text col s1 icon-center offset-s1" href="https://instagram.com/"></a>
                        <a class="fa fa-youtube fa-2x red-text col s1 icon-center offset-s1" href="https://youtube.com/"></a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App;
