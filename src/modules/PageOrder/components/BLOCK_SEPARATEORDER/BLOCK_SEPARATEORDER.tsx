import React, { FC } from "react";

import "./BlockSeparateOrder.css";
import { orderStore } from "@store/index";
import { mapOrderItems } from "@utils/mapOrderItems";
import { Switch } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { BLOCKFORM_withWrapper } from "../../../../types/orderTypes";

const BLOCK_SEPARATEORDER: FC<BLOCKFORM_withWrapper> = observer((props) => {
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
  const handlerChangeIsSepatatedOrder = () => {
    ChangeIsSplitBillCheckBox();
    ChangeSomePositionInOrdersStoreState(
      mapOrderItems(getOrdersStoreState?.items)
    );
    ChangeIsPayPositionsSepatatedOrderCheckBox(false);
  };

  return (
    <>
      {getIsSplitBill && (
        <div
          className={SeparateOrderClasses}
          onClick={handlerChangeIsSepatatedOrder}
        >
          Разделить счёт
          <Switch checked={getIsSplitBillCheckBox} />
        </div>
      )}
    </>
  );
});

export default BLOCK_SEPARATEORDER;
