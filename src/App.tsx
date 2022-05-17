import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/Pawel605/da-frontend-4b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout Waleria's repository
        </a>

        <button onClick={sayHello}>Click me!</button>
      </header>
    </div>
  );
}
function sayHello() {
  alert('You clicked me!');
  console.log('Click happened');
}

export default App;
