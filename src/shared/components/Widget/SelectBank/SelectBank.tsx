import React, { useState, useEffect } from "react";

import "./SelectBank.css";
import "./FillListBanksStyle.css";
import "@script/slide-up-widget.js";
import PageLoader from "@modules/PageLoader";
import Modal from "@shared/components/Modal";
import { qrLinktsStore } from "@store/index";
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

  const { getIsLoadingQr_Link, getQrLink } = qrLinktsStore;

  const [allBanks, setAllBanks] = useState<any>([]);
  const [PopularAllBanks, setPopularAllBanks] = useState<any>([]);
  const [isShowAllBanks, setIsShowAllBanks] = useState<boolean>(false);
  const [filterInput, setFilterInput] = useState<string>("");
  const [searchPlaceholder, setSearchPlaceholder] =
    useState<string>("Поиск...");

  useEffect(() => {
    const slideUpWidget = new (window as any).SlideUpWidget(
      window.localStorage,
      window.navigator
    );
    if (getQrLink) {
      slideUpWidget
        .getBankList(`${getQrLink}`)
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
    }
  }, [getIsLoadingQr_Link, getQrLink]);

  const sortBanks = sortNamesBanksByLetter(allBanks, filterInput);

  if (getIsLoadingQr_Link) {
    return (
      <Modal
        setchangeVisModal={() =>
          setValueSelectBank((ValueSelectBank: any) => !ValueSelectBank)
        }
      >
        <PageLoader
          className={"Block-ListSelectBank_popularBanks__PageLoaders"}
          description={"Ожидайте"}
        />
      </Modal>
    );
  }
  if (isShowAllBanks) {
    return (
      <Modal
        setchangeVisModal={() =>
          setValueSelectBank((ValueSelectBank: any) => !ValueSelectBank)
        }
        titleModal={"Выберите банк для оплаты"}
      >
        <div className="Block-ListSelectBank_allBanks">
          <div className="Modal_order__SelectBankheader">
            <img
              className="Modal_order__SelectBankheader__arrowBackPage"
              alt="icon_left_arrow"
              src={ICON_LEFT_ARROW}
              onClick={() =>
                setIsShowAllBanks((setIsShowAllBanks) => !setIsShowAllBanks)
              }
            />
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
      </Modal>
    );
  }

  return (
    <Modal
      setchangeVisModal={() =>
        setValueSelectBank((ValueSelectBank: any) => !ValueSelectBank)
      }
      titleModal={"Выберите банк для оплаты"}
    >
      <ul className="Block-ListSelectBank_popularBanks">
        {PopularAllBanks.map((populaBank: any) => (
          <li
            className="Block-ListSelectBank__PositionSelectBank"
            onClick={() => window.open(populaBank.dboLink)}
            key={populaBank.bankName}
          >
            <img
              className="Block-ListSelectBank__BankIcon"
              src={populaBank.logoURL}
              alt="icon_bank"
            />
            <div className="Block-ListSelectBank__nameBank">
              {populaBank.bankName}
            </div>
          </li>
        ))}
      </ul>
      <div className="wrapper_Block-chooseAllBanks">
        <div
          className="Block-chooseAllBanks"
          onClick={() => setIsShowAllBanks((isShowAllBanks) => !isShowAllBanks)}
        >
          <img src={ICON_SFP} alt="icon_sfp" />
          Все банки
          <img
            src={ICON_RIGHT_ARROW}
            className="Block-chooseAllBanks__icoArrow"
            alt="icon_arrow"
          />
        </div>
      </div>
      <div className="Modal__description">
        Выбрав банк, вы перейдете в мобильное <br />
        приложение для завершения оплаты
      </div>
    </Modal>
  );
});

export default SelectBank;
