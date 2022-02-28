import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import {CAMPSITES} from './shared/campsites'

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                campsites: CAMPSITES
            };
        }
    
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites}/>
            </div>
        );
    }
}

export default App; //this function "App" is the default funtion for the entire file
//export { App }; exporting a named app. Must include {} in linnked file