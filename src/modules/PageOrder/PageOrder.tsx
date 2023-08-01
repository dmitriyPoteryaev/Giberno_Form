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
  const {
    getIsLoading,
    getError,
    ChangeDataAboutOrders,
    getIsTips,
    getIsSplitBill,
  } = orderStore;
  const location = useLocation();

  const { getCurHeight } = heightBlockStore;

  const navigate = useNavigate();
  useEffect(() => {
    const curData: any = {
      client_id: "fb1969e9-8fa1-4b40-a9a4-da10a3fd968e",
      key_form: "1ac3749a-d27e-4133-b422-f6f15cd42e97",
    };

    location.search.split("&").forEach((line, i) => {
      curData[line.split("=")[0].split("?").reverse()[0]] =
        line.split("=")[1] || "1ac3749a-d27e-4133-b422-f6f15cd42e97";
    });

    navigate(
      "/test/formpay?client_id=" +
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
        {getIsSplitBill && (
          <BLOCK_SEPARATEORDER wrapperClassName="wrapperBlock" />
        )}
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
