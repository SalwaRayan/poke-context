import { useContext } from "react";
import { useFormik } from "formik";
import { UserContext } from "../context/UserContext";
import * as Yup from "yup";

import Button from "../components/Button"

const Login = () => {
  const {isLogged, setIsLogged} = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value)
      setIsLogged(true)
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("You have to put your username")
        .max(15, "It's too long!"),
      password: Yup.string()
        .required("You have to put your password")
        .min(6, "It's too short!"),
    }),
  });

  console.log(isLogged)

  return (
    <>
      <div className="view">
        <div className="flex container-form">
          <h1>Login</h1>
          <form
            onClick={formik.handleSubmit}
            className="flex container-form form"
          >
            <input
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <label>{formik.errors.username}</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <label>{formik.errors.password}</label>
            { !isLogged ?
              <Button type="submit">Login</Button>
              :
              <Button type="button" handleClick={() => setIsLogged(false)}>Logout</Button>
            }
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
