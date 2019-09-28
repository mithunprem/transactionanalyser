import React from 'react';
import Header from './Components/Header';
import TransactionAnalyser from './Containers/TransactionAnalyser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TransactionAnalyser />
    </div>
  );
}

export default App;
