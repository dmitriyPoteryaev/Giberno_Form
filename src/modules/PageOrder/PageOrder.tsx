import React, { useEffect } from "react";

import "./PageOrder.css";
import PageError from "@modules/PageError";
import PageLoader from "@modules/PageLoader/PageLoader";
import Header from "@shared/components/Header";
import { orderStore, heightBlockStore } from "@store/index";
import { observer } from "mobx-react-lite";
import { useNavigate, useLocation } from "react-router-dom";

import BLOCK_GENERALAMOUNT from "./components/BLOCK_GENERALAMOUNT";
import BLOCK_LISTORDERS from "./components/BLOCK_LISTORDERS";
import BLOCK_SEPARATEORDER from "./components/BLOCK_SEPARATEORDER";
import BLOCK_TIPS from "./components/BLOCK_TIPS";
import BLOCK_WAYSPAY from "./components/BLOCK_WAYSPAY/BLOCK_WAYSPAY";
import BLOCK_СONDITIONSORDER from "./components/BLOCK_СONDITIONSORDER";

const PageOrder = observer(() => {
  const { getIsLoading, getError, ChangeDataAboutOrders, getIsTips } =
    orderStore;
  const location = useLocation();

  const { getCurHeight } = heightBlockStore;

  const navigate = useNavigate();
  useEffect(() => {
    const curData: any = {
      client_id: "fb1969e9-8fa1-4b40-a9a4-da10a3fd968e",
      key_form: "58441a73-5fb8-479e-88c8-9472f8d02a1c",
    };

    location.search.split("&").forEach((line, i) => {
      if (i === 0) {
        curData.client_id =
          line.split("=")[1] || "fb1969e9-8fa1-4b40-a9a4-da10a3fd968e";
      } else {
        curData.key_form =
          line.split("=")[1] || "58441a73-5fb8-479e-88c8-9472f8d02a1c";
      }
    });

    navigate(
      "/formpay?client_id=" +
        curData.client_id +
        "&" +
        "key_form=" +
        curData.key_form
    );

    ChangeDataAboutOrders(curData.client_id, curData.key_form);
  }, [navigate, location.search, ChangeDataAboutOrders]);

  if (getError) {
    return <PageError />;
  }

  if (getIsLoading) {
    return <PageLoader description={"Ожидайте, скоро появится Ваш заказ!"} />;
  }

  return (
    <div
      className="pageOrder"
      style={{ paddingBottom: `${getCurHeight + 0}px` }}
    >
      <Header wrapperClassName="wrapperBlock"></Header>
      <div className="OrderContent">
        <BLOCK_SEPARATEORDER wrapperClassName="wrapperBlock" />
        <BLOCK_LISTORDERS wrapperClassName="wrapperBlock" />
        {getIsTips && <BLOCK_TIPS wrapperClassName="wrapperBlock" />}
        <BLOCK_GENERALAMOUNT wrapperClassName="wrapperBlock" />
        <BLOCK_СONDITIONSORDER />
        <BLOCK_WAYSPAY />
      </div>
    </div>
  );
});

export default PageOrder;
