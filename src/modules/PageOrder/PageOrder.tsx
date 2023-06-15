import React, { useEffect } from "react";

import "./PageOrder.css";
import Header from "@shared/components/Header";
import { orderStore } from "@store/index";
import { Spin } from "antd";
import { observer } from "mobx-react-lite";

import BlockSeparateOrder from "./components/BlockSeparateOrder";
import BlockWithWaysPay from "./components/BlockWithWaysPay";
import GeneralAmount from "./components/GeneralAmount";
import ListOrders from "./components/ListOrders";
import Tips from "./components/Tips";
import СonditionsOrder from "./components/СonditionsOrder";

const PageOrder = observer(() => {
  const { ChangeDataAboutOrders, getIsLoading, getIsTips } = orderStore;

  useEffect(() => {
    ChangeDataAboutOrders();
  }, [ChangeDataAboutOrders]);

  if (getIsLoading) {
    return (
      <div className="pageOrder__loader">
        <div className="pageOrder__loader_Content">
          <div
            style={{
              maxWidth: "200px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Ожидайте, скоро появится Ваш заказ!
          </div>
          <Spin size="large" />
        </div>
      </div>
    );
  }

  return (
    <div className="pageOrder">
      <Header></Header>
      <div className="OrderContent">
        <BlockSeparateOrder wrapperClassName="wrapperBlock" />
        <ListOrders wrapperClassName="wrapperBlock" />
        {getIsTips && <Tips wrapperClassName="wrapperBlock" />}
        <GeneralAmount wrapperClassName="wrapperBlock" />
        <СonditionsOrder />
        <BlockWithWaysPay />
      </div>
    </div>
  );
});

export default PageOrder;
