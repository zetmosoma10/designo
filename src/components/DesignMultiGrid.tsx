import React from "react";

interface Props {
  children: React.ReactNode;
}
const DesignMultiGrid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-auto-fill gap-8 max-container">
      {children}
    </div>
  );
};

export default DesignMultiGrid;
