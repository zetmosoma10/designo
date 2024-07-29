import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
  to?: string;
  type?: "link" | "button";
}

const Button = ({ children, className, to, type = "link" }: Props) => {
  if (type === "button")
    return <button className={`btn ${className}`}>{children}</button>;

  if (type === "link") {
    if (!to) {
      console.error("The 'to' prop is required when type is 'link'");
      return null;
    }
    return (
      <Link to={to} className={`btn ${className}`}>
        {children}
      </Link>
    );
  }

  return null;
};

export default Button;
