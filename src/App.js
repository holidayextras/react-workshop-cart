import React from 'react';
import './App.css';
import Payment from './containers/Payment'

function App() {
  return (
    <div>
      <header className="navbar navbar-default navbar-static-top pt-4 mb-5">
        <div className='container'>
          <h1 className="text-secondary">Oliday Xtraz</h1>
        </div>
      </header>
      <div className='container'>
        <Payment />
      </div>
    </div>
  );
}

export default App;
