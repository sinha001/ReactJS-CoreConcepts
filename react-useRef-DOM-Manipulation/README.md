
# 🔧 React useRef & Uncontrolled Form Demo

This project demonstrates the differences between using traditional DOM manipulation and React's `useRef` for handling forms — and why using `useState` is the best practice in React.

## 📂 Project Structure

```
/src
  ├── App.jsx
  ├── components/
  │   └── Form.jsx
  ├── main.jsx
  └── index.css
tailwind.config.js
postcss.config.js
index.html
```

## 🚀 Features

- 📌 useRef to focus and update input fields directly
- 🔓 Uncontrolled form using `document.querySelector`
- 📌 Uncontrolled form using `useRef`
- ⚠️ Best practice alert for beginners: why state is preferred in React

## 💡 Learning Outcomes

- Understand uncontrolled vs. controlled components
- Practice using `useRef` in forms
- See the difference between using the DOM and React state

## ✅ Tailwind Setup Instructions

If not already installed, follow these steps to add Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then update your files:

### `tailwind.config.js`
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `main.jsx`
```js
import './index.css'; // Make sure this is imported at the top
```

## 🧪 Test Tailwind
Try adding this to your App:

```jsx
<h1 className="text-3xl font-bold text-blue-600">Tailwind is Working!</h1>
```

## 📸 Preview

![Preview of useRef and Form Live Demo](https://react-js-core-concepts-wc5w.vercel.app/)

---

## 🧠 Note

> In React, **direct DOM manipulation** (via `querySelector` or `useRef`) should generally be avoided when managing form inputs. Instead, use `useState` for controlled components — they are easier to debug, predictable, and fit into the React paradigm.

---

Built with 💙 using React and Tailwind CSS.
