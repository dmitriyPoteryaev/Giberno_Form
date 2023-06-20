import React, { useEffect, useState } from "react";

import { orderStore } from "@store/index";
import { Spin } from "antd";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import "./Loader.css";

const Loader = observer(() => {
  const {
    ChangeDataAboutOrders,
    getIsLoading,
    getCurrentclient_id,
    getCurrentkey_form,
    getError,
  } = orderStore;

  const navigate = useNavigate();

  const client_id: string =
    sessionStorage.getItem("client_id") ||
    "7bc05553-4b68-44e8-b7bc-37be63c6d9e9";

  const key_form: string =
    sessionStorage.getItem("key_form") ||
    "497f6eca-6276-4993-bfeb-53cbbbba6f08";

  useEffect(() => {
    ChangeDataAboutOrders(client_id, key_form);

    if (!getIsLoading && !getError) {
      navigate(
        "/formpay?client_id=" +
          getCurrentclient_id +
          "&" +
          "key_form=" +
          getCurrentkey_form
      );
    }

    if (getError) {
      navigate("/error");
    }
  }, [
    ChangeDataAboutOrders,
    getIsLoading,
    getCurrentclient_id,
    getCurrentkey_form,
    navigate,
    getError,
  ]);

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

  return <></>;
});

export default Loader;
