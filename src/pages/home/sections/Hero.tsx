import React from "react";
import Button from "../../../components/Button";
import heroImg from "../../../assets/home/desktop/image-hero-phone.png";

const Hero = () => {
  return (
    <section
      className="bg-peach text-white grid lg:grid-cols-2 md:max-container md:rounded-3xl
        pt-20 md:pt-[60px] lg:pt-0 lg:px-24"
    >
      <div className="text-center lg:text-left lg:self-center px-6 md:px-14 lg:px-0 max-w-[600px] mx-auto lg:mx-0 lg:max-w-none">
        <h1 className="font-medium text-3xl md:5xl">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-base mt-3 mb-6 md:m-[8px] md:mb-[20px] lg:mt-3 lg:mb-10">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, apps, and engaging brand experiences. Find
          out more about our services.
        </p>
        <Button>LEARN MORE</Button>
      </div>
      <img className="justify-self-center" src={heroImg} alt="" />
    </section>
  );
};

export default Hero;