import React, { memo, FC } from "react";

import "./ButtonChangeTips.css";
import classNames from "classnames";

export type BLOCK_TIPS__BUTTONProps = React.PropsWithChildren<{
  onClick: React.MouseEventHandler;
  disabled: string;
}>;

const BLOCK_TIPS__BUTTON: FC<BLOCK_TIPS__BUTTONProps> = memo(
  (props) => {
    const { children, onClick, disabled } = props;
    const BlockButtonChangeClasses = classNames({
      "Block-InputTips___BUTTONChangeTips": true,
      "Block-InputTips___BUTTONChangeTips_active": disabled === children,
    });

    return (
      <button
        className={BlockButtonChangeClasses}
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
