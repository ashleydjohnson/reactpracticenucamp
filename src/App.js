import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    };
}

export default App; //this function "App" is the default funtion for the entire file
//export { App }; exporting a named app. Must include {} in linnked file