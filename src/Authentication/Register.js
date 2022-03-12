import React from "react";
import axios from "axios";
  import "./reg.css";
import { useFormik } from "formik";
// import { useNavigate, Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";

// import Footer from "../../Footer/Footer";

const ValidateForm = (formValue) => {
  const errors = {};
  const reg_exp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2.4}$/;
  const validatePassword = RegExp(
    "^(?=.*[@!#$])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$"
  );

  if (!formValue.username) {
    errors.username = "please enter email";
  } else if (formValue.username.length>5) {
    errors.username = "Min length 5";
  }
  if (!formValue.password) {
    errors.password = "please enter password";
  } else if (validatePassword.test(formValue.password)) {
    errors.password = "invalid password";
  }
  if (!formValue.email) {
    errors.username = "please enter email";
  } else if (reg_exp.test(formValue.email)) {
    errors.username = "invalid email";
  }
  console.log("Error:", errors);
  return errors;
};
function Register() {
//   const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username:"",
      email: "",
      password: "",
    },
    validate: ValidateForm,
    onSubmit: (values) => {
      console.log("recieved values:", values);
      axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
        .then(res=>{
          console.log("Axios res: ",res);
          // navigate('/reg');
      })
      .catch(err=>{
          console.log("Error in axios: ",err);
      })
    },
  });
  return (
    <div className="form1">
      <br></br>
      <h1 className="user-heading">Registration Form</h1>
      <div className="log">
        <form className="reg-form" onSubmit={formik.handleSubmit}>
          Username:{" "}
          <input
            type="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <br></br>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
            <br></br>
            Password:{" "}
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button type="submit" style={{ fontSize: "16px" }}>
            Submit
          </button>
        </form>
      </div>
      <div>
        {/* <p className="reg-tag">
          Don't have an account yet? Register
          <Nav.Link as={Link} to="/Register">
           click Here.
          </Nav.Link>
        </p> */}
        {/* <Footer/> */}
      </div>
    </div>
    
  );
}

export default Register;

