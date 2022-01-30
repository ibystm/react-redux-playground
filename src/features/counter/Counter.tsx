import React from "react";
import { useAppDispatch, useSelector } from "../../app/hooks";
import { startLoading, stopLoading } from "../loading/loadingActionCreator";
import styles from "./Counter.module.css";
import { decrement, increment } from "./counterActionCreator";
import { selectCount } from "./reducer";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();
  const loadStart = () => {
    dispatch(startLoading("ロード中...."));
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3000);
  };
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
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
