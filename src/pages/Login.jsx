import React from "react";
import { Link } from "react-router-dom";
import CustomeInput from "../components/CustomeInput";

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="error text-center">
          {/* {message.message == "Rejected" ? "You are not an Admin" : ""} */}
        </div>
        <form
          action=""
          // onSubmit={formik.handleSubmit}
        >
          <CustomeInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            // onChng={formik.handleChange("email")}
            // onBlr={formik.handleBlur("email")}
            // val={formik.values.email}
          />
          <div className="error mt-2">
            {/* {formik.touched.email && formik.errors.email} */}
          </div>
          <CustomeInput
            type="password"
            label="Password"
            id="pass"
            name="password"
            // onChng={formik.handleChange("password")}
            // onBlr={formik.handleBlur("password")}
            // val={formik.values.password}
          />
          <div className="error mt-2">
            {/* {formik.touched.password && formik.errors.password} */}
          </div>
          <div className="mb-3 text-end">
            <Link to={"/forgot-password"} className="">
              Forgot Password?
            </Link>
          </div>

          <Link to={'/admin'}>
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
