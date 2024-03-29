import React from "react";

export const NotDefaultComponent = () => {
  return <h3>I am not exported by default</h3>;
};

const DefaultComponent = () => {
  return <h3>I am exported by default</h3>;
};

export default DefaultComponent;
