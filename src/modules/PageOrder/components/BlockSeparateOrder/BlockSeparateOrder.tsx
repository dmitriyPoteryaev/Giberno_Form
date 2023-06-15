import React, { useState } from "react";

import "./BlockSeparateOrder.css";
import PopupShare from "@shared/components/PopupShare/PopupShare";
import { orderStore } from "@store/index";
import { Switch } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

const ICON_SHARE: string = require("@assets/share.svg").default;

const BlockSeparateOrder = observer((props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const { wrapperClassName } = props;
  const {
    getIsSplitBill,
    getIsSplitBillCheckBox,
    ChangeIsSplitBillCheckBox,
    ChangeSomePositionInOrdersStoreState,
    getOrdersStoreState,
    ChangeIsPayPositionsSepatatedOrderCheckBox,
  } = orderStore;

  const SeparateOrderClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    BlockSeparateOrder__MakeSeparatedOrder: true,
  });
  const ShareOrderButtonClasses = classNames({
    [`${wrapperClassName}`]: !!wrapperClassName,
    BlockSeparateOrder__ShareOrderButton: true,
  });

  const handlerChangeIsSepatatedOrder = () => {
    ChangeIsSplitBillCheckBox();
    ChangeSomePositionInOrdersStoreState(
      getOrdersStoreState?.items?.reduce((acc: any, item: any) => {
        return [...acc, { ...item, separatePosition: false }];
      }, [])
    );
    ChangeIsPayPositionsSepatatedOrderCheckBox(false);
  };

  return (
    <div className="BlockSeparateOrder">
      {getIsSplitBill && (
        <div
          className={SeparateOrderClasses}
          onClick={handlerChangeIsSepatatedOrder}
        >
          Разделить счёт
          <Switch checked={getIsSplitBillCheckBox} />
        </div>
      )}

      <img
        src={ICON_SHARE}
        alt="share_icon"
        className={ShareOrderButtonClasses}
        onClick={() => setIsOpen((isOpen: any) => !isOpen)}
      />
      <PopupShare setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
});

export default BlockSeparateOrder;
