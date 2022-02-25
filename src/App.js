import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState} from 'react';
import Functions from './Functions.js';
import KeyPad from './Keys.js';

function App() {

  const [lastValue, setLastValue] = useState('0');
  const [disp, setDisp] = useState(lastValue);

  return (
    <div id='main-box' >
      <h1 id='brand'>A™</h1>
      <div id='display'>
        {disp}
      </div>
      <div id='keypad-container'>
        <Functions updateDisp={setDisp} dispValue={disp} setLastVal={setLastValue} />
        <KeyPad updateDisp={setDisp} dispValue={disp} />
      </div>
    </div>
  );
}

export default App;
