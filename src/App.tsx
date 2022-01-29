import React from "react";
import "./App.css";
import { useSelector } from "./app/hooks";
import { Counter } from "./features/counter/Counter";
import { selectLoading } from "./features/loading/reducer";
import logo from "./logo.svg";

function App() {
  const loadingState = useSelector(selectLoading);
  return loadingState.loading ? (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {loadingState.message && <h1>{loadingState.message}</h1>}
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
