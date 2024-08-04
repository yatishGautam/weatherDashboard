import React from "react";

const HorizontalWrapper = ({ children }) => {
  return <div className="horizontal-card-container">{children}</div>;
};

const VerticalWrapper = ({ children }) => {
  return <div className="vertical-card-container">{children}</div>;
};

export { HorizontalWrapper, VerticalWrapper };
