import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitleAction } from "../stores/slices/common";

export const useTitle = (title) => {
  const dispatch = useDispatch();
  return useEffect(() => {
    dispatch(setTitleAction(title));
    return () => {
      dispatch(setTitleAction(""));
    };
  }, [title, dispatch]);
};
