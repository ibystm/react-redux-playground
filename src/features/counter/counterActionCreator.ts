import { ActionTypes, CounterActionTypes } from "./types";

export const increment = (): CounterActionTypes => ({
  type: ActionTypes.increment,
});
export const decrement = (): CounterActionTypes => ({
  type: ActionTypes.decrement,
});

export const counterActions = {
  increment,
  decrement,
};
