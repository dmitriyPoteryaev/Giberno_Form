import React, { useState } from "react";

import "./BlockSeparateOrder.css";
import PopupShare from "@shared/components/PopupShare/PopupShare";
import { Switch } from "antd";
import classNames from "classnames";

const ICON_SHARE: string = require("@assets/share.svg").default;

const BlockSeparateOrder = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

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
    BlockSeparateOrder__MakeSeparatedOrder: true,
  });
  const ShareOrderButtonClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    BlockSeparateOrder__ShareOrderButton: true,
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
    <div className="BlockSeparateOrder">
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

      <img
        src={ICON_SHARE}
        alt="share_icon"
        className={ShareOrderButtonClasses}
        onClick={() => setIsOpen((isOpen: any) => !isOpen)}
      />
      <PopupShare setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default BlockSeparateOrder;
