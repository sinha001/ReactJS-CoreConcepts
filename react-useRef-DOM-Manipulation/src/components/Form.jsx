import { useRef, useState } from 'react';

export default function Form() {
  const [user, setUser] = useState('');
  const [usersRef, setUsersRef] = useState('');

  const [password, setPassword] = useState('');
  const [passwordsRef, setPasswordsRef] = useState('');

  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
    console.log(user + '  ' + password);
    setUser(user);
    setPassword(password);
  };

  const handleFormRef = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user + '   ' + password);
    setUsersRef(user);
    setPasswordsRef(password);
  };

  return (
    <div className="space-y-10">
      {/* 🔔 Best Practice Alert */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
        <strong>Note:</strong> In React, directly accessing the DOM using
        `querySelector` or `useRef` to manipulate form values is not the
        recommended approach.
        <br />
        Instead, it’s best to use{' '}
        <code className="bg-white px-1 rounded text-red-500">useState</code> for
        form handling. This ensures better control, reactivity, and
        maintainability.
      </div>

      {/* Form 1: querySelector() */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🔒 Uncontrolled Component using <code>document.querySelector</code>
        </h2>
        <p className="text-gray-600 mb-4">
          This form uses traditional DOM methods (<code>querySelector</code>) to
          retrieve input values. It's not the preferred React approach but
          demonstrates how uncontrolled components work.
        </p>

        <form onSubmit={handleForm} className="space-y-4">
          <input
            type="text"
            id="user"
            placeholder="username"
            className="w-full border px-4 py-2 rounded bg-gray-100"
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="w-full border px-4 py-2 rounded bg-gray-100"
          />
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
            Submit (querySelector)
          </button>
        </form>

        <div className="mt-4 w-full border px-4 py-2 rounded bg-gray-50">
          <p>
            <strong>Username:</strong> {user}
          </p>
          <p>
            <strong>Password:</strong> {password}
          </p>
        </div>
      </div>

      <hr className="my-8" />

      {/* Form 2: useRef() */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          📌 Uncontrolled Component using <code>useRef</code>
        </h2>
        <p className="text-gray-600 mb-4">
          This version uses <code>useRef</code> to access DOM values. While
          still uncontrolled, it's slightly better than using DOM selectors like{' '}
          <code>querySelector</code>, but still not as reactive or clean as
          using state.
        </p>

        <form onSubmit={handleFormRef} className="space-y-4">
          <input
            type="text"
            ref={userRef}
            placeholder="username"
            className="w-full border px-4 py-2 rounded bg-gray-100"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="password"
            className="w-full border px-4 py-2 rounded bg-gray-100"
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            Submit (useRef)
          </button>
        </form>

        <div className="mt-4 w-full border px-4 py-2 rounded bg-gray-50">
          <p>
            <strong>Username:</strong> {usersRef}
          </p>
          <p>
            <strong>Password:</strong> {passwordsRef}
          </p>
        </div>
      </div>
    </div>
  );
}
