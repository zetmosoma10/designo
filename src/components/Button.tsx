import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
  to: string;
  type?: "link" | "button";
}

const Button = ({ children, className, to, type = "link" }: Props) => {
  if (type === "button")
    return <button className={`btn ${className}`}>{children}</button>;
  if (type === "link")
    return (
      <Link to={to} className={`btn ${className}`}>
        {children}
      </Link>
    );
};

export default Button;
