import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// We use pure functions from slice
import {
  decrement,
  increment,
  incrementByAmount,
  clearCounter,
} from "./slices/counter/counterSlice";

function Counter() {
  // now count is stored in store (Redux)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{count}</p>
        <input
          type="number"
          placeholder="Increment by amount"
          onChange={(event) => {
            setAmount(parseInt(event.target.value));
          }}
        />
        <button onClick={() => dispatch(increment())}>Increase++</button>
        <button onClick={() => dispatch(decrement())}>Decrease--</button>
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Send amount to increment
        </button>
        <button onClick={() => dispatch(clearCounter())}>Clear Counter</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Counter;
