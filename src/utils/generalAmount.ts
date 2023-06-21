export const generalAmount = (
  tips: number,
  serviceChargeAmount: number,
  deposit: number,
  curGeneralAmount: number,
  isServiceChargeAmount: boolean
): string => {
  const generalAmout = (
    curGeneralAmount +
    tips +
    (isServiceChargeAmount ? serviceChargeAmount : 0) -
    (typeof deposit === "number" ? deposit : 0)
  ).toFixed(2);

  return +generalAmout >= 0 ? generalAmout : "0";
};
