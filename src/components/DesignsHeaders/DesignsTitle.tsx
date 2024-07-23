import React from "react";

interface Props {
  children: React.ReactNode;
}

const DesignsTitle = ({ children }: Props) => {
  return <h1 className="font-medium text-3xl md:text-5xl">{children}</h1>;
};

export default DesignsTitle;
