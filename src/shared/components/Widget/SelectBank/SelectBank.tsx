import React, { useState, useEffect } from "react";
import "./SelectBank.css";
import "@script/slide-up-widget.js";

const ARRAY_WITH_POPULAR = ["Сбербанк", "Тинькофф Банк", "АЛЬФА-БАНК"];

const SelectBank = (props: any) => {
  const { ValueSelectBank, setValueSelectBank } = props;

  const [allBanks, setAllBanks] = useState<any>([]);
  const [PopularAllBanks, setPopularAllBanks] = useState<any>([]);

  useEffect(() => {
    const slideUpWidget = new (window as any).SlideUpWidget(
      window.localStorage,
      window.navigator
    );

    slideUpWidget
      .getBankList(
        "https://qr.nspk.ru/AS100001ORTF4GAF80KPJ53K186D9A3G?type=01&bank=100000000007&crc=0C8A"
      )
      .then((res: any) => {
        return JSON.stringify(res, null, 2);
      })
      .then((json: any) => {
        setAllBanks(json);

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

    // console.log(bankList);

    // const json: any = JSON.stringify(bankList, null, 2);

    //   setAllBanks(json);
    //   const popularBanks: any = JSON.parse(json).filter((bank: any) => {
    //     return ARRAY_WITH_POPULAR.some(
    //       (popularBank: any) => popularBank === bank.bankName
    //     );
    //   });
  }, []);

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
        </div>
      </div>
    </div>
  );
};

export default SelectBank;
