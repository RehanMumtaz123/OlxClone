import React from 'react';
import './App.css';
import Descrip from './Descrip';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Descrip />
      {/* <Home /> */}
    </div>
  );
}

export default App;
