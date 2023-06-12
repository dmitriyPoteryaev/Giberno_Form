import React from "react";

import "./BlockSeparateOrder.css";
import { Switch } from "antd";
import classNames from "classnames";

const BlockSeparateOrder = (props: any) => {
  const {
    wrapperClassName,
    getIsMakeSeparateOrder,
    ChangeIsMakeSeparateOrder,
    getisSepatatedOrder,
    ChangeIsSepatatedOrder,
    orders,
    ChangeSomePositionInOrdersStoreState,
    ChangeisPayPositionsSepatatedOrder,
  } = props;

  const SeparateOrderClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    BlockSeparateOrder: true,
  });

  const handlerChangeIsSepatatedOrder = () => {
    if (getisSepatatedOrder) {
      ChangeSomePositionInOrdersStoreState(
        orders.map((elem: any, k: any) => {
          return { ...elem, separatePosition: false };
        })
      );
      ChangeisPayPositionsSepatatedOrder(false);
    }

    ChangeIsSepatatedOrder(!getisSepatatedOrder);
  };

  return (
    <div className={SeparateOrderClasses}>
      Разделить счёт
      <Switch
        checked={getIsMakeSeparateOrder}
        onChange={() => {
          ChangeIsMakeSeparateOrder();
          handlerChangeIsSepatatedOrder();
        }}
      />
    </div>
  );
};

export default BlockSeparateOrder;
