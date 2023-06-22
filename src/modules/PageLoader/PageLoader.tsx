import React from "react";

import { Spin } from "antd";
import "./Loader.css";

const Loader = () => {
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
};

export default Loader;
