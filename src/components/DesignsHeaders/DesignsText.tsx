import React from "react";

interface Props {
  children: React.ReactNode;
}

const DesignsText = ({ children }: Props) => {
  return <p className="text-base mt-6">{children}</p>;
};

export default DesignsText;
