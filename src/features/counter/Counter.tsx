import React from "react";
import { useAppDispatch, useSelector } from "../../app/hooks";
import { startLoading, stopLoading } from "../loading/loadingActionCreator";
import { selectLoading } from "../loading/reducer";
import styles from "./Counter.module.css";
import { decrement, increment } from "./counterActionCreator";
import { selectCount } from "./reducer";

export function Counter() {
  const count = useSelector(selectCount);
  const loading = useSelector(selectLoading);
  const dispatch = useAppDispatch();
  const loadStart = () => {
    dispatch(startLoading("ロードしてるよ"));
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
        Loading開始ボタン
      </button>
      {loading.loading && loading.message}
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}
