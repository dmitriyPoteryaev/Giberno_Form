import React from "react";

import CustomCheckBox from "@shared/components/CustomCheckBox/CustomCheckBox";
import Modal from "@shared/components/Modal/Modal";

import BLOCK_WAYSPAY__BUTTON from "../BLOCK_WAYSPAY__BUTTON/BLOCK_WAYSPAY__BUTTON";

const BLOCK_WAYSPAY__MODAL = (props: any) => {
  const { getObjectWithWaysPay, handlerShowWaysPay, curWayPay, setWayPay } =
    props;

  return (
    <Modal
      setchangeVisModal={handlerShowWaysPay}
      titleModal={"Способ Оплаты"}
      height={25}
    >
      <div className="Block-WaysPay">
        <header>Способ Оплаты</header>
        <ul className="Block-WaysPay__list">
          {Object.values(getObjectWithWaysPay).map(
            ([svgIcon, name]: any, i: number) => (
              <li className="Block-WaysPay__header" key={i}>
                <img
                  src={svgIcon}
                  alt="way_to_pay"
                  className="Block-WaysPay__icoWayPay"
                />
                <div className="Block-WaysPay__title">
                  <div className="Block-WaysPay__subtitle"> {name}</div>
                </div>

                <CustomCheckBox
                  onChange={() =>
                    setWayPay(Object.keys(getObjectWithWaysPay)[i])
                  }
                  checked={Object.keys(getObjectWithWaysPay)[i] === curWayPay}
                  classNameCheckBox={"Block-WaysPay_checkBox"}
                  classNameFakeCheckBox={"Block-WaysPay__fakeCheckBox"}
                  classNameLable={"Block-WaysPay__label"}
                ></CustomCheckBox>
              </li>
            )
          )}
        </ul>

        <BLOCK_WAYSPAY__BUTTON disabled={false} onClick={handlerShowWaysPay}>
          {["Выбрать"]}
        </BLOCK_WAYSPAY__BUTTON>
      </div>
    </Modal>
  );
};

export default BLOCK_WAYSPAY__MODAL;
