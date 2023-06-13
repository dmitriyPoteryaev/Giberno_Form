import React from "react";

import "./PopupShare.css";
import ButonShare from "@shared/components/ButonShare/ButonShare";

const PopupShare = (props: any) => {
  const { isOpen, setIsOpen } = props;
  return (
    <>
      {isOpen && (
        <div
          className="popup"
          onClick={() => setIsOpen((isOpen: any) => !isOpen)}
        >
          <div
            className="popup-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="popup-content__buttonShare">
              <ButonShare />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupShare;
