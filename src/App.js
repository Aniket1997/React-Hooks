import React from 'react';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseEffect from './Components/UseEffect/UseEffect';
import UseReducer from './Components/UseReducer/UseReducer';

function App() {
  return (
    <>
      <h1>Example of useEffect</h1>
      <UseState/>
      <UseEffect/>
      <UseReducer/>
    </>
  );
}

export default App;
