import React from "react";
import { useSelector } from "../../app/hooks";
import { actions } from "../../app/store";
import { useActions } from "../../store/useActions";
import styles from "./Counter.module.css";
import { selectCount } from "./reducer";

export function Counter() {
  const count = useSelector(selectCount);
  const { stopLoading, startLoading, increment, decrement } =
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
      <button className={styles.button} onClick={loadStart}>
        Loading開始
      </button>
    </div>
  );
}
