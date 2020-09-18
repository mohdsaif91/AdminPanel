import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import { Auth } from "../../../service";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format"),
  password: Yup.string()
    .min(8, "Atleast 8 character required*")
    .required("New Password is required"),
});
const SignUp1 = (props) => {
  // const [data, setData] = useState({ ...initialValues });
  const [log, setLog] = useState("");
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const getText = (e) => {
    // setData({
    //   ...data,
    //   [e.target.name]: e.target.value,
    // });
  };
  const adminSignup = () => {
    if (formik.isValid) {
      Auth.loginShop(formik.values)
        .then((response) => {
          if (response.status === 200) {
          } else {
            setLog("Username or Password Incorrect");
          }
        })
        .catch((error) => {
          setLog("Username or Password Incorrect");
        });
    } else {
      setLog("Username or Password is Invalid");
    }
  };
  return (
    <Aux>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <h3 className="mb-4">Shop Log In</h3>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.email && formik.touched.email ? (
                  <div className="row text-danger mt-1 mx-auto">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <div className="row text-danger mt-1 mx-auto">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="mb-2 text-primary mt-1 mx-auto">
                <a>
                  <NavLink to="/auth/reset-password-1">Forgot password</NavLink>
                </a>
              </div>
              <button
                onClick={adminSignup}
                className="btn btn-primary shadow-2 mb-4"
              >
                Sign In
              </button>
              <p>{log}</p>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default SignUp1;
