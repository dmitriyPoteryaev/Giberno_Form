import React from "react";
import "./CustomCheckBox.css";

const CustomCheckBox = (props: any) => {
  const {
    onChange,
    checked,
    onClick,
    desctiprion,
    classNameCheckBox,
    classNameFakeCheckBox,
  } = props;

  return (
    <label className="check option">
      <input
        type="checkbox"
        className={classNameCheckBox}
        onChange={onChange}
        checked={checked}
      />
      <span className={classNameFakeCheckBox}></span>
      <span onClick={onClick}>{desctiprion}</span>
    </label>
  );
};

export default CustomCheckBox;
