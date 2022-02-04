import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

let adjestIntervel = undefined;
function App() {

  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);


  const onStart = () => {

    adjestIntervel = setInterval(() => {

      setWatch((x) => x + 1)

    }, 1000)
    setStarted(true);


  }
  const onStop = () => {
    clearInterval(adjestIntervel)
    setStarted(false);


  }
  const onReset = () => {

    setWatch(0);
    clearInterval(adjestIntervel)
    setStarted(false);


  }



  return (


    <div className='mt-5 text-center '>

          <h1>Start Stop watch</h1>
          <h2 className='mt-5'>{watch}</h2>
          <button  className='mt-5 btn btn-success' disabled={started} onClick={onStart}>Start</button>&nbsp;&nbsp;
          <button className='mt-5 btn btn-primary 'onClick={onStop}>Stop</button>&nbsp;&nbsp; 
          <button className='mt-5 btn btn-danger' onClick={onReset}>Reset</button>

        </div>
     
  );
}

export default App;

