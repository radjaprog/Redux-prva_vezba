import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCounterValue } from "./store/counter/selectors";
import {
  increment,
  decrement,
  incrementByAmount,
  setToRandom,
  performCounterReset,
} from "./store/counter/slice";

function App() {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Counter value: {count}</p>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(setToRandom());
          }}
        >
          Set To Random value
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          Increment by value 2
        </button>
        <button
          onClick={() => {
            dispatch(performCounterReset());
          }}
        >
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
