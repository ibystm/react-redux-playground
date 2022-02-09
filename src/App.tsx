import React from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import styles from "./features/counter/Counter.module.css";
import { stopLoading } from "./features/loading/loadingActionCreator";
import { selectLoading } from "./features/loading/reducer";
import logo from "./logo.svg";
import { useSelector } from "./store";
import { useDispatch } from "./store/index";

// ts-config import 絶対パスにする設定の読み込み
// redux-thunkの書き方
// react-hooksのテストについて

function App() {
  const loadingState = useSelector(selectLoading);
  const dispatch = useDispatch();

  const forceLoadStop = () => {
    dispatch(stopLoading());
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
