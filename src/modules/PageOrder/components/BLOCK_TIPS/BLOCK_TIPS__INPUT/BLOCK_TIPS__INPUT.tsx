import React from "react";

import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: "",
  allowDecimal: true,
  decimalSymbol: "",
  decimalLimit: 0, // how many digits allowed after the decimal
  integerLimit: 6, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

const BLOCK_TIPS__INPUT = ({
  value,
  onChange,
  maskOptions,
  ...inputProps
}: any) => {
  const TipsMaskInput = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return (
    <MaskedInput
      mask={TipsMaskInput}
      {...inputProps}
      value={value}
      onChange={onChange}
    />
  );
};

BLOCK_TIPS__INPUT.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

export default BLOCK_TIPS__INPUT;
