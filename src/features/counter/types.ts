import { Action } from "redux";
// import {ActionTypes} from "./counterActionCreator";

export const ActionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  reset: "RESET",
} as const;

export type Count = {
  value: number;
};

export type IncrementAction = {
  type: typeof ActionTypes.increment;
} & Action;

export type DecrementAction = {
  type: typeof ActionTypes.decrement;
} & Action;

export type ResetAction = {
  type: typeof ActionTypes.reset;
} & Action;

export type CounterActionTypes =
  | IncrementAction
  | DecrementAction
  | ResetAction;
