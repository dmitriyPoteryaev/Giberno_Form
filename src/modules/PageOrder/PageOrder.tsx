import React, { useEffect } from "react";

import "./PageOrder.css";
import Header from "@shared/components/Header";
import { orderStore, GenetalButtonStore } from "@store/index";
import { observer } from "mobx-react-lite";

import BlockSeparateOrder from "./components/BlockSeparateOrder";
import BlockWithWaysPay from "./components/BlockWithWaysPay";
import GeneralAmount from "./components/GeneralAmount";
import ListOrders from "./components/ListOrders";
import Tips from "./components/Tips";
import СonditionsOrder from "./components/СonditionsOrder";

const PageOrder = observer(() => {
  const {
    getDataAboutOrders,
    InfoAboutOrder,
    cbTips,
    ServiceChargeAmount,
    getIsServiceChargeAmount,
    ChangeIsServiceChargeAmount,
    getIsMakeSeparateOrder,
    ChangeIsMakeSeparateOrder,
    ChangeSomePositionInOrdersStoreState,
  } = orderStore;
  const {
    isActiveGenetalButton,
    StateAgreeConditionPyments,
    ChangeStateAgreeConditionPyments,
  } = GenetalButtonStore;

  useEffect(() => {
    getDataAboutOrders();
  }, [getDataAboutOrders]);

  return (
    <div className="pageOrder">
      <Header></Header>
      <div className="OrderContent">
        <BlockSeparateOrder
          wrapperClassName="wrapperBlock"
          getIsMakeSeparateOrder={getIsMakeSeparateOrder}
          ChangeIsMakeSeparateOrder={ChangeIsMakeSeparateOrder}
        />
        <ListOrders
          wrapperClassName="wrapperBlock"
          orders={InfoAboutOrder?.Orders}
          getIsMakeSeparateOrder={getIsMakeSeparateOrder}
          ChangeSomePositionInOrdersStoreState={
            ChangeSomePositionInOrdersStoreState
          }
        />
        <Tips
          wrapperClassName="wrapperBlock"
          name_waiter={InfoAboutOrder?.name_waiter}
          general_order={InfoAboutOrder?.general_order}
          tips={cbTips}
        />
        <GeneralAmount
          wrapperClassName="wrapperBlock"
          general_order={InfoAboutOrder?.general_order}
          tips={cbTips}
          getIsServiceChargeAmount={getIsServiceChargeAmount}
          ServiceChargeAmount={ServiceChargeAmount}
        />
        <СonditionsOrder
          StateAgreeConditionPyments={StateAgreeConditionPyments}
          ChangeStateAgreeConditionPyments={ChangeStateAgreeConditionPyments}
          ServiceChargeAmount={ServiceChargeAmount}
          getIsServiceChargeAmount={getIsServiceChargeAmount}
          ChangeIsServiceChargeAmount={ChangeIsServiceChargeAmount}
        />
        <BlockWithWaysPay
          general_order={InfoAboutOrder?.general_order}
          tips={cbTips}
          isActiveGenetalButton={isActiveGenetalButton}
          ServiceChargeAmount={ServiceChargeAmount}
          getIsServiceChargeAmount={getIsServiceChargeAmount}
        />
      </div>
    </div>
  );
});

export default PageOrder;
