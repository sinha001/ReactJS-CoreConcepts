
# 🧪 React `useEffect` Demo: Counter Function Calls

This demo component showcases how function calls behave in React when triggered directly versus when wrapped inside `useEffect`.

It helps users understand:
- How React's lifecycle triggers function calls
- The difference between direct execution vs dependency-based execution
- Why a function might run on mount, update, or mode switch

---

## 📂 File Structure

```bash
/src
  └── Counter.jsx
```

---

## 📦 Dependencies

This component uses React hooks:
- `useState`
- `useEffect`

No external packages are required.

---

## 🚀 How It Works

The component accepts three props:

- `count`: A number to simulate count state.
- `data`: A value to simulate data changes (e.g., API results).
- `mode`: Controls the function call strategy:
  - `'none'` – Shows the default message
  - `'noEffect'` – Calls functions directly when `count` or `data` changes
  - `'withEffect'` – Uses `useEffect` to control when functions are triggered

---

## 💡 Function Behaviors

| Mode        | Function Call Method     | Triggers                                            |
|-------------|---------------------------|-----------------------------------------------------|
| `none`      | None                      | No functions run                                    |
| `noEffect`  | Direct inside useEffect   | Runs both on mount + when `count`, `data`, `mode` changes |
| `withEffect`| Inside separate useEffects| `handleCountProp()` runs on `mode` change only<br>`handleDataProp()` runs on mount + `data` change when in `'withEffect'` mode |

---

## 🖥️ UI Breakdown

- **Left Panel**: Displays current mode, count, and data values
- **Right Panel**: Shows how many times each function (`handleCountProp`, `handleDataProp`) has been triggered
- **Explanation Area**: Tells the user *why* a specific function was called based on the mode

---

## 🔁 Real-World Use Case

This is ideal for:
- Beginners learning React lifecycle and `useEffect`
- Debugging unexpected renders or prop-based side effects
- Educational demos for workshops or tutorials

---

## 📝 Example Usage

```jsx
<Counter count={5} data={2} mode="withEffect" />
```

You can dynamically change the `mode` via dropdowns or buttons to see how the internal function counters behave.

---

## 📷 Screenshot

Here’s what a demo UI might look like:

```
-----------------------------------------------
| Without useEffect         | Function Calls  |
|                           |----------------|
| Count: 5                  | handleCount: 1 |
| Data: 2                   | handleData: 2  |
-----------------------------------------------

Explanation:
✔️ Functions were called directly as soon as 'noEffect' mode was selected.
```

---

## 🔧 Future Enhancements

- Add buttons to simulate `count` or `data` changes manually
- Track re-renders visually
- Option to toggle between mount and update behavior

---

## 📃 License

MIT

---

> Developed for educational clarity. Use this UI to deeply understand how React’s rendering and effect system work behind the scenes.
