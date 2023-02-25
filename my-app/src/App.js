import React, {  useState } from 'react'
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();
  const [currTime, setCurrTime] = useState(time)
  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  }, 1000)
  
  return (
    <main>
      <section className='card'>
        <div>
          <h1>Time : {currTime}</h1>
        </div>
      </section>
    </main>
  );
}

export default App;
