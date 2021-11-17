import { useFormik } from "formik"
import * as Yup from "yup"

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: value => {
      console.log(value)
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .max(15, "It's too long!"),
        // .require("You have to put your username"),
      password: Yup.string()
        .min(6, "It's too short!")
        // .require("You have to put your password")
    })
  })

  return (
    <>
      <div className="view">
        <div className="flex container-form">
          <h1>Login</h1>
          <form onClick={formik.handleSubmit} className="flex container-form form">
            <input 
              onChange={formik.handleChange} 
              value={formik.values.username} 
              name="username" 
              type="text" 
              placeholder="Enter your username" 
            />
            {/* <label htmlFor=""></label> */}
            <input 
              onChange={formik.handleChange} 
              value={formik.values.password} 
              name="password" 
              type="password" 
              placeholder="Enter your password" 
            />
            {/* <label htmlFor=""></label> */}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
} 

export default Login