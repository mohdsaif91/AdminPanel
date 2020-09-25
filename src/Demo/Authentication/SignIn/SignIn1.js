import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Auth } from "../../../service";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Atleast 4 character required*")
    .required("Password is required"),
});

export const SignIn1 = (props) => {
  const [log, setLog] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const textOnClick = () => {
    if (formik.isValid) {
      Auth.loginAdmin(formik.values)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            console.log(response.data);
            localStorage.setItem("auth-token", response.data.authorization);
            props.history.push("/dashboard/default");
          } else {
            setLog("Username or Password is Incorrect");
          }
        })
        .catch((erros) => {
          console.log(erros);
          setLog("Username or Password is Incorrect");
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
              <h3 className="mb-4">Admin Log In</h3>
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    // {...getFieldProps("email")}
                    className="form-control"
                    placeholder="Email"
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
              <button
                onClick={textOnClick}
                className="btn btn-primary shadow-2 mb-4"
              >
                Login
              </button>
              <p>{log}</p>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};
export default SignIn1;
