import { useEffect, useState } from 'react';

export default function Counter({ count, data, mode }) {
  const [countCalls, setCountCalls] = useState(0);
  const [dataCalls, setDataCalls] = useState(0);

  const handleCountProp = () => {
    setCountCalls((prev) => prev + 1);
    console.log('handleCountProp called');
  };

  const handleDataProp = () => {
    setDataCalls((prev) => prev + 1);
    console.log('handleDataProp called');
  };

  // 🧹 Reset function call counters every time mode changes
  useEffect(() => {
    setCountCalls(0);
    setDataCalls(0);
  }, [mode]);

  // 🔁 Case 1: Functions called directly (no useEffect dependency) — runs on mount + updates
  useEffect(() => {
    if (mode === 'noEffect') {
      handleCountProp(); // acts like direct call inside render
      handleDataProp();
    }
  }, [count, data, mode]); // 🔥 Ensure they re-trigger on mount + updates + mode

  // ✅ Case 2: Functions wrapped in controlled useEffects
  useEffect(() => {
    if (mode === 'withEffect') {
      handleCountProp(); // Triggers once on mode switch to 'withEffect'
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'withEffect' && data) {
      handleDataProp(); // Triggers if data exists
    }
  }, [data, mode]);

  const renderExplanation = () => {
    if (mode === 'noEffect') {
      return (
        <>
          <p><strong>Why are both called?</strong> Because in <code>noEffect</code> mode, handlers run right after mode is activated.</p>
          <p><span style={{ color: 'darkred' }}>✔️ One-time call expected, even on reload.</span></p>
        </>
      );
    } else if (mode === 'withEffect') {
      return (
        <>
          <p><strong>Why is <code>count</code> handler called?</strong> Because mode is <code>'withEffect'</code>, and useEffect has [mode].</p>
          <p><strong>Why is <code>data</code> handler called?</strong> Because the [data] effect runs once on mount and whenever data changes.</p>
        </>
      );
    }
    return null;
  };

  return (
    <>
      {mode === 'none' ? (
        <p>Please select a mode to begin the demonstration.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1, border: '1px solid gray', padding: '1rem' }}>
              <h3>{mode === 'noEffect' ? 'Without useEffect' : 'With useEffect'}</h3>
              <p>
                Demonstrating how handlers behave
                {mode === 'noEffect'
                  ? ' when called directly on mode selection.'
                  : ' when called inside dependency-based useEffect.'}
              </p>
              <h2>Counter: {count}</h2>
              <h2>Data: {data}</h2>
            </div>
            <div style={{ flex: 1, border: '1px solid gray', padding: '1rem' }}>
              <h3>Function Calls</h3>
              <p><strong>handleCountProp:</strong> {countCalls} time(s)</p>
              <p><strong>handleDataProp:</strong> {dataCalls} time(s)</p>
            </div>
          </div>

          <div
            style={{
              marginTop: '10px',
              background: '#f9f9f9',
              color: '#000',
              padding: '1rem',
              border: '1px solid #ccc',
            }}
          >
            <h4>Explanation</h4>
            {renderExplanation()}
          </div>
        </div>
      )}
    </>
  );
}
