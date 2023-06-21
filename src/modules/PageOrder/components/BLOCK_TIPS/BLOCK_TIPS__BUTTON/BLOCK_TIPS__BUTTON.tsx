import React, { memo } from "react";

import "./ButtonChangeTips.css";
import classNames from "classnames";

const BLOCK_TIPS__BUTTON = memo(
  (props: any) => {
    const { children, onClick, disabled } = props;
    const WrraperButtonChangeClasses = classNames({
      Tips__BtnChangeTips: true,
      Tips__BtnChangeTips_active: disabled === children,
    });

    return (
      <button
        className={WrraperButtonChangeClasses}
        disabled={disabled === children}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
  (prevProps, nexProps) => {
    if (
      nexProps.children === nexProps.disabled ||
      prevProps.children === prevProps.disabled
    ) {
      return false;
    } else {
      return true;
    }
  }
);

export default BLOCK_TIPS__BUTTON;
