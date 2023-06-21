export const calculedPercentByCurrentGeneralAmount = (
  percent: number,
  CurGeneralAmount: number
) => {
  return Math.round((CurGeneralAmount * percent) / 100);
};
