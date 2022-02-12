import React from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import styles from "./features/counter/Counter.module.css";
import { selectLoading } from "./features/loading/reducer";
import logo from "./logo.svg";
import { actions, useSelector } from "./store";
import { useActions } from "./store/useActions";

function App() {
  const loadingState = useSelector(selectLoading);
  const { stopLoading } = useActions(actions);
  const forceLoadStop = () => {
    stopLoading();
  };
  return loadingState.loading ? (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {loadingState.message && <h1>{loadingState.message}</h1>}
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={forceLoadStop}
      >
        Force Stop Load
      </button>
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
