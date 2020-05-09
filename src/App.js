import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Home from "./components/home/Home";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Route exact path='/' component={Home} />

                <Route path='/contacts' component={Contacts} />

                <Route path='/about' component={About} />

            </div>
        );
    }
}

export default App;
