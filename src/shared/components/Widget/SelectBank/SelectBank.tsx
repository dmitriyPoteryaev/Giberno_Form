import React, { useState, useEffect } from "react";

import "./SelectBank.css";
import "./FillListBanksStyle.css";
import "@script/slide-up-widget.js";
import { orderStore } from "@store/index";
import { sortNamesBanksByLetter } from "@utils/sortNamesBanksByLetter";
import { observer } from "mobx-react-lite";

const ICON_LEFT_ARROW: string = require("@assets/left_arrow.svg").default;
const ICON_SEARCH = require("@assets/seach.svg").default;
const ICON_RIGHT_ARROW: string =
  require("@assets/waysPay/right_arrow.svg").default;
const ARRAY_WITH_POPULAR = ["Сбербанк", "Тинькофф Банк", "АЛЬФА-БАНК"];
const ICON_SFP = require("@assets/waysPay/SFP.svg").default;

const SelectBank = observer((props: any) => {
  const { setValueSelectBank } = props;

  const { getIsEmailRequire, getIsEmail } = orderStore;

  const [allBanks, setAllBanks] = useState<any>([]);
  const [PopularAllBanks, setPopularAllBanks] = useState<any>([]);
  const [isGiveCheck, setIsGiveCheck] = useState<boolean>(getIsEmailRequire);
  const [isShowAllBanks, setIsShowAllBanks] = useState<boolean>(false);
  const [filterInput, setFilterInput] = useState<string>("");
  const [searchPlaceholder, setSearchPlaceholder] =
    useState<string>("Поиск...");

  useEffect(() => {
    const slideUpWidget = new (window as any).SlideUpWidget(
      window.localStorage,
      window.navigator
    );

    slideUpWidget
      .getBankList(
        "https://qr.nspk.ru/AD1000031A4PDMGD838OFSMGHLJRV12T?type=02&bank=100000000004&sum=1000&cur=RUB&crc=8C61"
      )
      .then((res: any) => {
        return JSON.stringify(res, null, 2);
      })
      .then((json: any) => {
        setAllBanks(JSON.parse(json));

        return json;
      })
      .then((json: any) => {
        return JSON.parse(json).filter((bank: any) => {
          return ARRAY_WITH_POPULAR.some(
            (popularBank: any) => popularBank === bank.bankName
          );
        });
      })
      .then((popualarBanks: any) => setPopularAllBanks(popualarBanks));
  }, []);

  const sortBanks = sortNamesBanksByLetter(allBanks, filterInput);

  if (isShowAllBanks) {
    return (
      <div
        className="Modal_order__SelectBank"
        onClick={() =>
          setValueSelectBank((ValueSelectBank: any) => !ValueSelectBank)
        }
      >
        <div onClick={(event) => event.stopPropagation()}>
          <div className="Modal_order__SelectBankContent">
            <div className="Modal_order__SelectBankheader">
              <img
                className="Modal_order__SelectBankheader__arrowBackPage"
                alt="icon_left_arrow"
                src={ICON_LEFT_ARROW}
                onClick={() =>
                  setIsShowAllBanks((setIsShowAllBanks) => !setIsShowAllBanks)
                }
              />
              <div className="Modal_order__SelectBankheader__TitlechooseWaysPay">
                Выберите банк для оплаты
              </div>
            </div>
            <div className="Modal_order__SelectBankheader__BlockSearch">
              <input
                value={filterInput}
                onChange={(event) => setFilterInput(event.target.value)}
                onFocus={() => setSearchPlaceholder("")}
                onBlur={() => setSearchPlaceholder("Поиск...")}
                className="Modal_order__SelectBankheader__InputSearch"
                placeholder={searchPlaceholder}
              />
              <img
                className="Modal_order__SelectBankheader__IconSearch"
                alt="icon_search"
                src={ICON_SEARCH}
              />
              <div className="Modal_order__SelectBankheader__wrap_buttonCross">
                <button
                  className="Modal_order__SelectBankheader__cross"
                  onClick={() => setFilterInput("")}
                ></button>
              </div>
            </div>
            <div className="Modal_order__SelectBankheader_FullList">
              {Object.keys(sortBanks).map((categoryBank, i) => (
                <div
                  key={categoryBank}
                  className="Modal_order__SelectBankheader_FullList_categories"
                >
                  <div className="Modal_order__SelectBankheader_FullList_titleCategory">
                    {categoryBank}
                  </div>
                  {sortBanks[categoryBank].map(
                    (bankWWithSpecificCategory: any) => (
                      <div
                        className="Modal_order__SelectBankheader_FullList_BankCategory"
                        onClick={() =>
                          window.open(bankWWithSpecificCategory.dboLink)
                        }
                        key={bankWWithSpecificCategory.bankName}
                      >
                        <img
                          className="Modal_order__SelectBankheader_FullList_IconBank"
                          src={bankWWithSpecificCategory.logoURL}
                          alt="icon_bank"
                        />
                        {bankWWithSpecificCategory.bankName}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="Modal_order__SelectBank"
      onClick={() =>
        setValueSelectBank((ValueSelectBank: any) => !ValueSelectBank)
      }
    >
      <div onClick={(event) => event.stopPropagation()}>
        <div className="Modal_order__SelectBankContent">
          <div className="Modal_order__SelectBankheader">
            Выберите банк для оплаты
          </div>
          <ul className="Modal_order__ListSelectBank">
            {PopularAllBanks.map((populaBank: any) => (
              <li
                className="Modal_order__PositionSelectBank"
                onClick={() => window.open(populaBank.dboLink)}
                key={populaBank.bankName}
              >
                <img
                  className="Modal_order__SelectBankIcon"
                  src={populaBank.logoURL}
                  alt="icon_bank"
                />
                <div className="Modal_order__PositionSelectBank__nameBank">
                  {populaBank.bankName}
                </div>
              </li>
            ))}
          </ul>
          <div className="Modal_order__chooseAllBanks">
            <div
              className="Modal_order__chooseAllBanks_button"
              onClick={() =>
                setIsShowAllBanks((isShowAllBanks) => !isShowAllBanks)
              }
            >
              <img src={ICON_SFP} alt="icon_sfp" />
              Все банки
              <img
                src={ICON_RIGHT_ARROW}
                className="Modal_order__chooseAllBanks_arrow"
                alt="icon_arrow"
              />
            </div>
          </div>
          <div className="Modal_order__chooseAllBanks_button_description">
            Выбрав банк, вы перейдете в мобильное <br />
            приложение для завершения оплаты
          </div>
          {getIsEmail && (
            <label className="Modal_order__chooseAllBanks_check">
              <input
                checked={isGiveCheck}
                type="checkbox"
                className="Modal_order__chooseAllBanks_check__input"
                onChange={() => setIsGiveCheck((isGiveCheck) => !isGiveCheck)}
              />
              <span className="Modal_order__chooseAllBanks_check_box"></span>
              <span className="Modal_order__chooseAllBanks_GiveCheck">
                Хочу получить чек
              </span>
            </label>
          )}
          {isGiveCheck && (
            <input
              placeholder="Укажите свой e-mail"
              className="Modal_order__chooseAllBanks_Input"
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default SelectBank;
