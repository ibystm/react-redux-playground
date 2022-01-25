import { Action } from "redux";
// import {ActionTypes} from "./counterActionCreator";

export const ActionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
} as const;

export type Count = {
  value: number;
};

type IncrementAction = {
  type: typeof ActionTypes.increment;
} & Action;

type DecrementAction = {
  type: typeof ActionTypes.decrement;
} & Action;

export type CounterActionTypes = IncrementAction | DecrementAction;
