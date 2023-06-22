import React from "react";

import "./BlockWaysPayButton.css";
import classNames from "classnames";

const BLOCK_WAYSPAY__BUTTON = (props: any) => {
  const { disabled, onClick, children } = props;

  const ButtonWaysPayClasses = classNames({
    baseButton_blue: !disabled,
    baseButton: true,
    baseButton_gray: disabled && children[0] === "Oплатить",
  });

  return (
    <button
      className={ButtonWaysPayClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children.join(" ")}
    </button>
  );
};

export default BLOCK_WAYSPAY__BUTTON;
