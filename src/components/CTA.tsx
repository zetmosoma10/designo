import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="bgCircle bg-peach text-white py-16 px-6 md:my-14 lg:pt-[72px] lg:pb-12 lg:px-24 rounded-2xl">
      <div
        className="flex flex-col items-center max-w-[430px] mx-auto lg:max-w-none lg:mx-0
        lg:flex-row lg:justify-between"
      >
        <div className="text-center lg:text-left">
          <h3 className="font-medium text-3xl md:text-4xl lg:max-w-[268px]">
            Let’s talk about your project
          </h3>
          <p className="text-base mt-2 lg:max-w-[460px]">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button to="/contacts" className="uppercase mt-8 lg:mt-0">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default CTA;
