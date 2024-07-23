import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "link" | "button";
}

const Button = ({ children, className, type = "link" }: Props) => {
  if (type === "button")
    return <button className={`btn ${className}`}>{children}</button>;
  if (type === "link")
    return (
      <a href="#" className={`btn ${className}`}>
        {children}
      </a>
    );
};

export default Button;
