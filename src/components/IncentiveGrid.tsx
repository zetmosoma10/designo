import React from "react";

interface Props {
  children: React.ReactNode;
}

const IncentiveGrid = ({ children }: Props) => {
  return (
    <section className="max-container grid gap-y-20 md:gap-y-8 lg:gap-x-8 lg:grid-cols-3 ">
      {children}
    </section>
  );
};

export default IncentiveGrid;
