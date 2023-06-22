import React from "react";
import "./Modal.css";

const Modal = (props: any) => {
  const { setchangeVisModal, titleModal, children } = props;
  return (
    <div className="Block-Modal" onClick={setchangeVisModal}>
      <div onClick={(event) => event.stopPropagation()}>
        <div className="Block-Modal__Content">
          <h2 className="Block-Modal__header">{titleModal}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
