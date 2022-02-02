import React from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { selectLoading } from "./features/loading/reducer";
import logo from "./logo.svg";
import { useSelector } from "./store";

// ts-config import 絶対パスにする設定の読み込み
// eslintの設定について調べる。
// redux-thunkの書き方
// react-hooksのテストについて

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
