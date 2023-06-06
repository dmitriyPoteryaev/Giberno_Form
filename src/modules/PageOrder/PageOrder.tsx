import React, { useEffect } from "react";

import "./PageOrder.css";
import Header from "@shared/components/Header";
import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";

import BlockWithWaysPay from "./components/BlockWithWaysPay";
import GeneralAmount from "./components/GeneralAmount";
import ListOrders from "./components/ListOrders";
import Tips from "./components/Tips";
import СonditionsOrder from "./components/СonditionsOrder";

const PageOrder = observer(() => {
  const { getDataAboutOrders, InfoAboutOrder, cbTips } = orderStore;

  useEffect(() => {
    getDataAboutOrders();
  }, [getDataAboutOrders]);

  return (
    <div className="pageOrder">
      <Header></Header>
      <div className="OrderContent">
        <ListOrders
          wrapperClassName="wrapperBlock"
          orders={InfoAboutOrder?.Orders}
        />
        <Tips
          wrapperClassName="wrapperBlock"
          name_waiter={InfoAboutOrder?.name_waiter}
          general_order={InfoAboutOrder?.general_order}
        />
        <GeneralAmount
          wrapperClassName="wrapperBlock"
          general_order={InfoAboutOrder?.general_order}
          tips={cbTips}
        />
        <СonditionsOrder />
        <BlockWithWaysPay
          general_order={InfoAboutOrder?.general_order}
          tips={cbTips}
        />
      </div>
    </div>
  );
});

export default PageOrder;
