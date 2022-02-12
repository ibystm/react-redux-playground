import React from "react";
import { actions, useSelector } from "../../store";
import { useActions } from "../../store/useActions";
import styles from "./Counter.module.css";
import { selectCount } from "./reducer";

export function Counter() {
  const count = useSelector(selectCount);
  const { stopLoading, startLoading, increment, decrement, lazyReset } =
    useActions(actions);

  const loadStart = () => {
    const countToString = count.toString();
    const countString = countToString.concat("000");
    startLoading(`${count}秒ロード中....`);
    setTimeout(() => {
      stopLoading();
    }, Number(countString));
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: 350,
        }}
      >
        <button className={styles.button} onClick={loadStart}>
          Loading開始
        </button>
        <button className={styles.button} onClick={() => lazyReset()}>
          reset
        </button>
      </div>
    </div>
  );
}
