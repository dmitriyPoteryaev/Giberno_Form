import React, { useState } from "react";

import "./Header.css";
import classNames from "classnames";

import PopupShare from "../PopupShare/PopupShare";

const ICON_SHARE: string = require("@assets/share.svg").default;

const Header = (props: any) => {
  const { wrapperClassName } = props;

  const [isOpen, setIsOpen] = useState(false);

  const ShareOrderButtonClasses = classNames({
    [wrapperClassName]: !!wrapperClassName,
    "Block-SeparateOrder__BUTTONShareOrder": true,
  });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title">Мой счёт</div>
        <div className="header__table">Стол </div>
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
