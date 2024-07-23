import React from "react";

interface Props {
  children: React.ReactNode;
}

const DesignsHeader = ({ children }: Props) => {
  return (
    <div
      className="bg-peach bgCircle text-center text-white py-[105px] px-6 
        md:max-container md:rounded-2xl md:py-16"
    >
      <div className="max-w-[384px] mx-auto">{children}</div>
    </div>
  );
};

export default DesignsHeader;
