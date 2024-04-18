import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import NewCar from "../../assets/newCar.png";
import ExchangeCar from "../../assets/exchangeCar.png";
import CarInPhone from "../../assets/carInPhone.png";
import store, {
  setInterestBrowsing,
  setInterestExchangeCar,
  setInterestNewCar,
  setIsLoading,
} from "../../redux/store";
import { addPreferences } from "../../services/auth.service";
import { CircularProgress } from "@material-ui/core";
const InterestsComponent = () => {
  const {
    Interests: { newCar, exchangeCar, browsing },
    id,
    Name,
    Email,
    Username,
    isLoading,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/details");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    let interestArray = [];
    if (newCar) {
      interestArray.push("newCar");
    }
    if (exchangeCar) {
      interestArray.push("exchangeCar");
    }
    if (browsing) {
      interestArray.push("browsing");
    }

    await addPreferences(id, interestArray, Name, Email, Username);
    dispatch(setIsLoading(false));
    return navigate("/success");
  };
  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);
  return (
    <div className="interests-component pb-12 flex flex-col">
      <nav className="pt-2 pl-2 pb-2 flex-row flex items-center">
        Volkswagen{" "}
      </nav>
      {/* <button className="ml-5 text-2xl text-slate-500 bg-slate-200 px-2 py-1 rounded flex contents-center justify-center">
          <div>&lt;</div>
        </button> */}
      <div className="h-30 w-30 mt-1">
        <Button
          variant="outlined"
          onClick={handleBackClick}
          className="back-btn "
          size="medium"
        >
          &lt;
        </Button>
      </div>

      <div className="text-center justify-around grow flex flex-col items-center">
        <form
          className="flex flex-col items-center gap-[2.5rem]"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="text-3xl font-bold">
              What brings you to <span className="vw">Volkswagen?</span>
            </div>
            <div className="text-slate-500 text-xs">
              Select the options that best describe you. Don't worry, you can
              still explore all our content.
            </div>
          </div>
          <div className="options-cards flex md:flex-row justify-evenly flex-col">
            <div
              className={`${
                newCar ? "selected" : ""
              } select-card w-4/5  border-2  my-5 md:my-0  mx-auto rounded-lg md:w-1/5`}
            >
              <img
                src={NewCar}
                alt="new car.png"
                className="card-img mx-auto my-4"
              />
              <div className="font-bold">I am looking to buy a New Car!</div>
              <input
                type="checkbox"
                className="select"
                disabled={isLoading}
                checked={newCar}
                onChange={(e) => dispatch(setInterestNewCar(e.target.checked))}
              />
            </div>
            <div
              className={`${
                exchangeCar ? "selected" : ""
              } select-card border-2 rounded-lg  my-5 md:my-0  mx-auto w-4/5 md:w-1/5 `}
            >
              <img
                src={ExchangeCar}
                alt="new car.png"
                className="card-img mx-auto my-4"
              />
              <div className="font-bold">
                I want to trade in my old car for a new one!
              </div>

              <br />
              <input
                type="checkbox"
                className="select"
                disabled={isLoading}
                checked={exchangeCar}
                onChange={(e) =>
                  dispatch(setInterestExchangeCar(e.target.checked))
                }
              />
            </div>
            <div
              className={`${
                browsing ? "selected" : ""
              } select-card border-2 rounded-lg mx-auto my-5 md:my-0 md:w-1/5 w-4/5`}
            >
              <img
                src={CarInPhone}
                alt="new car.png"
                className="card-img mx-auto my-4"
              />
              <div className="font-bold">
                I'm just here to know more about my favorite Volkswagen!{" "}
              </div>

              <input
                type="checkbox"
                className="select"
                disabled={isLoading}
                checked={browsing}
                onChange={(e) =>
                  dispatch(setInterestBrowsing(e.target.checked))
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="submit-button mx-auto text-center h-8 w-[134px]"
            disabled={!(browsing || exchangeCar || newCar) || isLoading}
          >
            {isLoading ? (
              <CircularProgress size={20} color="white" />
            ) : (
              "Finish"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterestsComponent;
