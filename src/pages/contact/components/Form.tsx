import React from "react";
import Button from "../../../components/Button";
import errorIcon from "../../../assets/contact/desktop/icon-error.svg";

const Form = () => {
  return (
    <form className="flex flex-col items-start gap-6">
      <div className="relative w-full flex items-center">
        <input className="custom-input" placeholder="Name" type="text" />
        <small className="absolute right-2 text-white text-nowrap flex items-center gap-2">
          {" "}
          <span>Can't be empty</span> <img src={errorIcon} alt="" />
        </small>
      </div>
      <div className="relative w-full flex items-center">
        <input className="custom-input" placeholder="Email" type="email" />
        <small className="absolute right-2 text-white text-nowrap flex items-center gap-2">
          {" "}
          <span>Can't be empty</span> <img src={errorIcon} alt="" />
        </small>
      </div>
      <div className=" relative w-full flex items-center">
        <input className="custom-input" placeholder="Phone" type="text" />
        <small className="absolute right-2 text-white text-nowrap flex items-center gap-2">
          {" "}
          <span>Can't be empty</span> <img src={errorIcon} alt="" />
        </small>
      </div>
      <div className="w-full">
        <textarea className="custom-input" placeholder="Message"></textarea>
      </div>
      <Button type="button" className="self-center md:self-end px-12 ">
        Submit
      </Button>
    </form>
  );
};

export default Form;
