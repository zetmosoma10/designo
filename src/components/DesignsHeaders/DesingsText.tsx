import React from "react";

interface Props {
  children: React.ReactNode;
}
const DesingsText = ({ children }: Props) => {
  return <p className="text-base mt-6">{children}</p>;
};

export default DesingsText;
