import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from ".";

export function useActions(actions: any, deps?: any[]) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      return bindActionCreators(actions, dispatch);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [actions, dispatch, ...deps] : [actions, dispatch]
  );
}
