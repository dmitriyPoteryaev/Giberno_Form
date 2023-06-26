import React, { useState } from "react";

import "./Header.css";
import { orderStore } from "@store/index";
import classNames from "classnames";

import PopupShare from "../PopupShare/PopupShare";

const ICON_SHARE: string = require("@assets/share.svg").default;

const Header = (props: any) => {
  const { wrapperClassName } = props;

  const { getHeadTextOne, getheadTextTwo, getMenuColor } = orderStore;

  const [isOpen, setIsOpen] = useState(false);

  const ShareOrderButtonClasses = classNames({
    [wrapperClassName]: !!wrapperClassName,
    "Block-SeparateOrder__BUTTONShareOrder": true,
  });

  return (
    <header
      className="header"
      style={{ backgroundColor: getMenuColor ? getMenuColor : "#010d35" }}
    >
      <div className="header__container">
        <div className="header__title">{getHeadTextOne}</div>
        <div className="header__table">{getheadTextTwo}</div>
        <img
          src={ICON_SHARE}
          alt="share_icon"
          className={ShareOrderButtonClasses}
          onClick={() => setIsOpen((isOpen: boolean) => !isOpen)}
        />
        <PopupShare setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
