import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: isSignup
      ? Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required")
      : null
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            {isSignup && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field type="password" id="confirmPassword" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>
            )}
            <div className="form-group">
              <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
            </div>
          </Form>
        </Formik>
        <div className="toggle-container">
          <p>{isSignup ? "Already have an account?" : "Don't have an account?"}</p>
          <button type="button" className="toggle-button" onClick={toggleSignup}>
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
