import React from "react";

const ButtonChangeTips = (props: any) => {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
};

export default ButtonChangeTips;
