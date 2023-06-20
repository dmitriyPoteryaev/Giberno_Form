import React, { useEffect } from "react";

import "./PageOrder.css";
import Header from "@shared/components/Header";
import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import BLOCK_LISTORDERS from "./components/BLOCK_LISTORDERS";
import BLOCK_SEPARATEORDER from "./components/BLOCK_SEPARATEORDER";
import BlockWithWaysPay from "./components/BlockWithWaysPay";
import GeneralAmount from "./components/GeneralAmount";
import Tips from "./components/Tips";
import СonditionsOrder from "./components/СonditionsOrder";

const PageOrder = observer(() => {
  const { getIsTips, getIsLoading } = orderStore;

  const navigate = useNavigate();

  // const client_id =
  //   new URLSearchParams(window.location.search).get("client_id") || "";

  // const key_form =
  //   new URLSearchParams(window.location.search).get("key_form") || "";

  // console.log(client_id, key_form);

  // useEffect(() => {

  //   if (!getIsLoading) {
  //     navigate("/loading");
  // }, [ChangeDataAboutOrders, getIsLoading]);

  // if (getIsLoading) {
  //   navigate("/loading");
  // }

  useEffect(() => {
    if (getIsLoading) {
      navigate("/loading");
    }
  }, [getIsLoading, navigate]);

  if (getIsLoading) {
    return <></>;
  }

  return (
    <div className="pageOrder">
      <Header></Header>
      <div className="OrderContent">
        <BLOCK_SEPARATEORDER wrapperClassName="wrapperBlock" />
        <BLOCK_LISTORDERS wrapperClassName="wrapperBlock" />
        {getIsTips && <Tips wrapperClassName="wrapperBlock" />}
        <GeneralAmount wrapperClassName="wrapperBlock" />
        <СonditionsOrder />
        <BlockWithWaysPay />
      </div>
    </div>
  );
});

export default PageOrder;
