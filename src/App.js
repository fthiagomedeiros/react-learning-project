import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">

        <Header />
        <About />
        <Contacts />

    </div>
  );
}

export default App;
