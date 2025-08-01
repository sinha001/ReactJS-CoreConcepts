import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [mode, setMode] = useState('none');

  const handleModeChange = (e) => {
    const selectedMode = e.target.value;

    // Reset count and data first
    setCount(0);
    setData(0);

    // Delay setting the mode until after count/data are reset
    setTimeout(() => {
      setMode(selectedMode);
    }, 0);
  };

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <label>Select Mode: </label>
        <select value={mode} onChange={handleModeChange}>
          <option value="none">--select mode--</option>
          <option value="noEffect">Without useEffect</option>
          <option value="withEffect">With useEffect</option>
        </select>
      </div>

      <Counter count={count} data={data} mode={mode} />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
        <button
          onClick={() => setData((prev) => prev + 1)}
          style={{ marginLeft: '10px' }}
        >
          Data
        </button>
      </div>
    </>
  );
}

export default App;
