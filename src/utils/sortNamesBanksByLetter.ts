const POPULAR_BANKS = [
  "Сбербанк",
  "Тинькофф Банк",
  "АЛЬФА-БАНК",
  "Банк ВТБ",
  "Райффайзенбанк",
];
export const sortNamesBanksByLetter = (
  arrayWithBanks: any,
  filterInput: any
) => {
  const new_obj: any = {
    Популярные: [],
  };

  arrayWithBanks
    .filter((bank: any) =>
      bank.bankName.toLowerCase()?.includes(filterInput.toLowerCase())
    )
    .forEach((InfoAboutbank: any) => {
      const INDEX_WORD = 0;

      const FIRST_LETTER_NAME_BANK = InfoAboutbank.bankName[INDEX_WORD];
      if (
        POPULAR_BANKS.some(
          (popularBank: any) => popularBank === InfoAboutbank.bankName
        )
      ) {
        new_obj["Популярные"] = [...new_obj["Популярные"], InfoAboutbank];
      }
      if (Object.keys(new_obj)?.includes(FIRST_LETTER_NAME_BANK)) {
        new_obj[FIRST_LETTER_NAME_BANK] = [
          ...new_obj[FIRST_LETTER_NAME_BANK],
          InfoAboutbank,
        ];
      } else {
        new_obj[FIRST_LETTER_NAME_BANK] = [InfoAboutbank];
      }
    });

  return new_obj;
};
