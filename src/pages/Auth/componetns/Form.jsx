import { useNavigate } from "react-router-dom";

import { useForm } from "../../../utils/hooks";
import { useLoginMutation } from "../../../stores/rtkq/auth";
import links from "../../../utils/links";

const initialState = {
  email: "",
  password: "",
};

const validation = {
  email: (value) => {
    if (!value) {
      return "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      return "invalid email address.";
    } else return "";
  },
  password: (value) => {
    if (!value) {
      return "Password is required.";
    } else if (value.length < 5) {
      return "Password must be longer.";
    } else return "";
  },
};

export default function Form() {
  const [login] = useLoginMutation();
  const navigateTo = useNavigate();
  const form = useForm({
    initialState,
    onSubmit,
    validation,
  });

  const handleChange = (e) => {
    form.handleChange(e);
  };

  function onSubmit(values) {
    login({
      data: values,
      runSideEffects: () => navigateTo(links.dashboard),
    });
  }

  const { values, handleSubmit, errors } = form;

  return (
    <form className="auth-form">
      <div className="input-container">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          onChange={(e) => handleChange(e)}
          value={values.email}
        />
        <span className="input-error">{errors.email}</span>
      </div>
      <div className="input-container">
        <input
          type="password"
          name="password"
          autoComplete="true"
          placeholder="Your password"
          onChange={(e) => handleChange(e)}
          value={values.name}
        />
        <span className="input-error">{errors.password}</span>
      </div>
      <button className="main-button" onClick={(e) => handleSubmit(e)}>
        send
      </button>
    </form>
  );
}
