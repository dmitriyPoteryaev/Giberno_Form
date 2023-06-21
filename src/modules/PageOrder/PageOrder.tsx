import React, { useEffect } from "react";

import "./PageOrder.css";
import PageError from "@modules/PageError";
import PageLoader from "@modules/PageLoader/PageLoader";
import Header from "@shared/components/Header";
import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";
import { useNavigate, useLocation } from "react-router-dom";

import BLOCK_GENERALAMOUNT from "./components/BLOCK_GENERALAMOUNT";
import BLOCK_LISTORDERS from "./components/BLOCK_LISTORDERS";
import BLOCK_SEPARATEORDER from "./components/BLOCK_SEPARATEORDER";
import BLOCK_TIPS from "./components/BLOCK_TIPS";
import BLOCK_WAYSPAY from "./components/BLOCK_WAYSPAY/BLOCK_WAYSPAY";
import BLOCK_СONDITIONSORDER from "./components/BLOCK_СONDITIONSORDER";

const PageOrder = observer(() => {
  const { getIsTips, getIsLoading, getError, ChangeDataAboutOrders } =
    orderStore;
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    const curData: any = {
      client_id: "fb1969e9-8fa1-4b40-a9a4-da10a3fd968e",
      key_form: "58441a73-5fb8-479e-88c8-9472f8d02a1c",
    };

    // location.search.split("&").forEach((line, i) => {
    //   if (i === 0) {
    //     curData.client_id =
    //       line.split("=")[1] || "7bc05553-4b68-44e8-b7bc-37be63c6d9e9";
    //   } else {
    //     curData.key_form =
    //       line.split("=")[1] || "497f6eca-6276-4993-bfeb-53cbbbba6f08";
    //   }

    // });

    navigate(
      "/formpay?client_id=" +
        curData.client_id +
        "&" +
        "key_form=" +
        curData.key_form
    );

    ChangeDataAboutOrders(curData.client_id, curData.key_form);
  }, [getIsLoading, navigate, location.search, ChangeDataAboutOrders]);

  if (getError) {
    return <PageError />;
  }

  if (getIsLoading) {
    return <PageLoader />;
  }

  return (
    <div className="pageOrder">
      <Header></Header>
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
