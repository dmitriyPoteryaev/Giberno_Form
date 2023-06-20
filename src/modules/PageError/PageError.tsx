import React from "react";
import "./Error.css";

import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";

const PageError = observer(() => {
  const { getError } = orderStore;

  return (
    <div className="pageOrder__error">
      <div className="pageOrder__error_Content">
        <div
          style={{
            maxWidth: "200px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <br />
          {`${getError}. Что пошло не так! Перезагрузите страницу`}
        </div>
      </div>
    </div>
  );
});

export default PageError;
