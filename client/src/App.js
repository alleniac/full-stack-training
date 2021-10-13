import './App.css';
import { useState } from 'react';

function App() {
  const [ info, setInfo ] = useState(null);

  function onFetchButtonClick() {
    fetch('/api/info')
      .then(res => res.json())
      .then(payload => setInfo(payload))
  }
  
  function onClearButtonClick() {
    setInfo(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <button onClick={onFetchButtonClick}>Fetch</button>
        <button onClick={onClearButtonClick}>Clear</button>
        {info && 
          <p>
            {`Name: ${info.name}.`}
            <br/>
            {`Position: ${info.position}.`}
          </p>
        }
      </header>
    </div>
  );
}

export default App;
