import React from "react";

import "./BlockSeparateOrder.css";
import { Switch } from "antd";
import classNames from "classnames";

const BlockSeparateOrder = (props: any) => {
  const {
    wrapperClassName,
    getIsMakeSeparateOrder,
    ChangeIsMakeSeparateOrder,
  } = props;

  const SeparateOrderClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    BlockSeparateOrder: true,
  });

  return (
    <div className={SeparateOrderClasses}>
      <Switch
        checked={getIsMakeSeparateOrder}
        onChange={ChangeIsMakeSeparateOrder}
      />
    </div>
  );
};

export default BlockSeparateOrder;
