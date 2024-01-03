import { React, useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CustomeInput from "../components/CustomeInput";

const Addblogcat = () => {
  return (
    <div>
      <h3 className="mb-4  title">Blog Category</h3>
      <div>
        <form action="">
          <CustomeInput
            type="text"
            name="title"
            label="Enter Blog Category"
            id="blogcat"
          />

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
