import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import Email from "../../assets/mail.png";
const SuccessComponent = () => {
  const navigate = useNavigate();

  const { id } = useSelector((state) => state);
  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);
  return (
    <div className="success-component  flex flex-col">
      <nav className="pt-2 pl-2 pb-2 flex-row flex items-center">
        Volkswagen
      </nav>

      <div className="body-container max-w-xl sm:text-xl flex flex-col items-center px-4 text-center mx-auto justify-around grow">
        <div className="text-4xl font-bold">Please verify your email...</div>
        <img src={Email} alt="email" className="email-image  w-2/12"></img>
        <div className="text-slate-500">
          Please verify your email address. We have sent a confirmation mail to:{" "}
        </div>
        <div>{useSelector((state) => state.Email)} </div>
        <div className="text-slate-500">
          Click the confirmation link to verify your account and to begin your
          journey with us.
        </div>
        <div className="text-slate-500">
          Didn't receive the mail? Check your Spam and Promotions folder. It may
          have been caught by a filter. If you still don't see it, we can
          <a target="_blank" href="/" className="select-link">
            {" "}
            resend the confirmation email.
          </a>
        </div>
        <div className="text-slate-500">
          Wrong email address?
          <a target="_blank" href="/" className="select-link">
            {" "}
            Change it.
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
