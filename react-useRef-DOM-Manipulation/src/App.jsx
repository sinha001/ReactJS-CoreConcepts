import { useRef } from 'react';
import Form from './components/Form';

function App() {
  const inputRef = useRef(null);

  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.value = 'NishantSinha01';
  };

  const toggleHandler = () => {
    const input = inputRef.current;
    input.style.display = input.style.display !== 'none' ? 'none' : 'inline';
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          🧠 useRef Demo
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={toggleHandler}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded shadow"
          >
            Toggle Input Visibility
          </button>

          <button
            onClick={inputHandler}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Focus & Autofill Input
          </button>
        </div>

        <div className="mb-10 text-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="username"
            className="border border-gray-300 px-4 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Form />
      </div>
    </div>
  );
}

export default App;
