import React from "react";

import "./CustomCheckBox.css";
import classNames from "classnames";

const CustomCheckBox = (props: any) => {
  const {
    onChange,
    checked,
    classNameCheckBox,
    classNameFakeCheckBox,
    classNameLable,
    children,
  } = props;

  const LabelCheckBoxClasses = classNames({
    [classNameLable]: !!classNameLable,
    check: true,
    option: true,
  });

  return (
    <label className={LabelCheckBoxClasses}>
      <input
        type="checkbox"
        className={classNameCheckBox}
        onChange={onChange}
        checked={checked}
      />
      <span className={classNameFakeCheckBox}></span>
      {children}
    </label>
  );
};

export default CustomCheckBox;
