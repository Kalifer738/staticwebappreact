import React from 'react';
import { useState } from 'react';

const [count, setCount] = useState(0);

function App() {
  return <div><span>Count: {count}</span><button onclick="() => {setCountFunc(() => {count + 1})}">Click me!</button></div>;
  
}

function click() {
  setCountFunc(() => {count + 1});
}

export default App;
