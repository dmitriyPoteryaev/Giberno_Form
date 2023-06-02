import React, { useEffect } from "react";

import "./PageOrder.css";
import Header from "@shared/components/Header";
import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";

import ListOrders from "./components/ListOrders";
import Tips from "./components/Tips";

const PageOrder = observer(() => {
  const { getDataAboutOrders, InfoAboutOrder } = orderStore;

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
        />
      </div>
      <div>{InfoAboutOrder?.general_order?.toFixed(2)}</div>
    </div>
  );
});

export default PageOrder;
