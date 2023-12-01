import { useEffect, useState } from "react";
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

export const useForm = ({ initialState, validation, onSubmit }) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (validation && validation[name]) {
      const errorMsg = validation[name](value);
      setErrors({ ...errors, [name]: errorMsg });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation) {
      const newErrors = {};
      Object.keys(validation).forEach((name) => {
        const errorMsg = validation[name](values[name]);
        if (errorMsg) {
          newErrors[name] = errorMsg;
        }
      });
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) return;
    }

    onSubmit(values);
  };

  return { values, handleChange, handleSubmit, errors };
};
