import React, { useEffect, useState } from "react";
// import { Button } from "@material-tailwind/react";
import CircularProgress from "@material-ui/core/CircularProgress";

import VWBusYellow from "../../assets/VWBusYellow.jpg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import store, {
  setEmail,
  setIsLoading,
  setName,
  setPassword,
  setUserId,
  setUsername,
} from "../../redux/store";
import { SignUp } from "../../services/auth.service";
const SignUpComponent = (props) => {
  const [error, setError] = useState("");
  const { Name, Email, Username, Password, isLoading } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    await SignUp(Name, Email, Username, Password).then((res) => {
      console.log(res);
      if (res.error) {
        dispatch(setIsLoading(false));
        setError(res.error);
        return;
      }
      dispatch(setIsLoading(false));
      dispatch(setUserId(res));
      return navigate("/details");
    });
  };

  return (
    <div className="flex signup-container">
      <div className="hidden lg:block">
        <img src={VWBusYellow} alt="VW Bus" className="my-image h-screen" />
      </div>
      <div className=" flex-auto   ">
        <div className="text-xs flex justify-end m-5">
          Already a member? <Link className="link">Sign in</Link>
        </div>
        <h3 className="mb-10 text-4xl font-bold text-left w-full text-center">
          Welcome to <span className="vw">Volkswagen</span>
        </h3>
        <div className="signup-form mx-auto   flex-col flex justify-center items-center justify-self-center w-max">
          <div className="text-wrap mb-10 text-xl sm:text-2xl font-bold text-left w-full">
            Register for an account
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row">
              <div className="form-group sm:mr-3">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control w-full rounded-md bg-slate-200 mt-1 px-2 py-1"
                  id="name"
                  disabled={isLoading}
                  required
                  value={Name}
                  onChange={(e) => {
                    dispatch(setName(e.target.value));
                  }}
                />
              </div>
              <div className="form-group mt-5 sm:mt-0">
                <label htmlFor="username" className="font-bold">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control w-full rounded-md bg-slate-200 mt-1 px-2 py-1"
                  id="username"
                  disabled={isLoading}
                  required
                  value={Username}
                  onChange={(e) => {
                    dispatch(setUsername(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="form-group mt-5">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-md bg-slate-200 w-full mt-1 px-2 py-1"
                disabled={isLoading}
                id="email"
                required
                value={Email}
                onChange={(e) => {
                  dispatch(setEmail(e.target.value));
                }}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-md bg-slate-200 w-full mt-1 px-2 py-2"
                id="password"
                disabled={isLoading}
                required
                placeholder="6+ characters"
                value={Password}
                onChange={(e) => {
                  dispatch(setPassword(e.target.value));
                }}
              />
            </div>
            <div className="mt-5">
              <input
                type="checkbox"
                disabled={isLoading}
                id="terms"
                value={isTermsChecked}
                checked={isTermsChecked}
                onChange={(e) => {
                  setIsTermsChecked(e.target.checked);
                }}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-slate-500">
                I agree to the <Link className="link">Terms of Service</Link>
              </label>
            </div>

            <button
              type="submit"
              className="submit-button mt-5 h-8 w-full sm:w-[196px]"
              disabled={!isTermsChecked || isLoading || Password.length < 7}
            >
              {isLoading ? (
                <CircularProgress size={20} color="white" />
              ) : (
                "Create Account"
              )}
            </button>

            <div className="text-red-500 text-xs mt-2">{error}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
