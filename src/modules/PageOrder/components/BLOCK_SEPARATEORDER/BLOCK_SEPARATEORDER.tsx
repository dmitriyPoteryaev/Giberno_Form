import React, { useState, FC } from "react";

import "./BlockSeparateOrder.css";
import PopupShare from "@shared/components/PopupShare/PopupShare";
import { orderStore } from "@store/index";
import { mapOrderItems } from "@utils/mapOrderItems";
import { Switch } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

export interface BLOCK_SEPARATEORDERprops {
  wrapperClassName: string;
}

const ICON_SHARE: string = require("@assets/share.svg").default;

const BLOCK_SEPARATEORDER: FC<BLOCK_SEPARATEORDERprops> = observer((props) => {
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
    [wrapperClassName]: !!wrapperClassName,
    "Block-SeparateOrder__SWITCHSeparatedOrder": true,
  });
  const ShareOrderButtonClasses = classNames({
    [wrapperClassName]: !!wrapperClassName,
    "Block-SeparateOrder__BUTTONShareOrder": true,
  });

  const handlerChangeIsSepatatedOrder = () => {
    ChangeIsSplitBillCheckBox();
    ChangeSomePositionInOrdersStoreState(
      mapOrderItems(getOrdersStoreState?.items)
    );
    ChangeIsPayPositionsSepatatedOrderCheckBox(false);
  };

  return (
    <div className="Block-SeparateOrder">
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

export default BLOCK_SEPARATEORDER;
