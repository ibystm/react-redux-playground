import { decrement, increment } from "../counterActionCreator";
import { counterReducer } from "../reducer";
describe("counter reducer test", () => {
  it("Itinial increment counter", () => {
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
  it("increment from 9999", () => {
    expect(counterReducer({ value: 9999 }, increment())).toEqual({
      value: 10000,
    });
  });

  it("Initial decrement test", () => {
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
  });
  it("Decrement test from 1000", () => {
    expect(counterReducer({ value: 1000 }, decrement())).toEqual({
      value: 999,
    });
  });
});
