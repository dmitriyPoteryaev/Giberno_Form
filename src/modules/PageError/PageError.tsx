import React, { useEffect } from "react";
import "./Error.css";

import { orderStore } from "@store/index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const PageError = observer(() => {
  const { getIsLoading, getError } = orderStore;

  const navigate = useNavigate();

  useEffect(() => {
    if (getIsLoading) {
      navigate("/loading");
    }
  }, [getIsLoading, navigate, getError]);

  if (getIsLoading) {
    return <></>;
  }
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
