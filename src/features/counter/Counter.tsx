import React from "react";
import { useAppDispatch, useSelector } from "../../app/hooks";
import { actions } from "../../app/store";
import { useActions } from "../../store/useActions";
import styles from "./Counter.module.css";
import { selectCount } from "./reducer";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();
  const { stopLoading, startLoading, increment, decrement } =
    useActions(actions);

  const loadStart = () => {
    startLoading("ロード中....");
    setTimeout(() => {
      stopLoading();
    }, 3000);
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
