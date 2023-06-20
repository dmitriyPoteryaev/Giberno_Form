import React, { useEffect, useState } from "react";

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
  const [Curlocation, setCurLocation] = useState(window.location.href);

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      Curlocation.split("?")[1]
        .split("&")
        .forEach((line) => {
          sessionStorage.setItem(line.split("=")[0], line.split("=")[1]);
        });
    };
  }, [Curlocation]);

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
