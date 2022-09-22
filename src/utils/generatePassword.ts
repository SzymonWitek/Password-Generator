interface generatePasswordI {
  args: {
    length: number;
    symbols?: boolean;
    numbers?: boolean;
    lowercases?: boolean;
    uppercases?: boolean;
  };
}

export default ({ args: { length, ...props } }: generatePasswordI) => {
  const NUMBERS = '0123456789';
  const SYMBOLS = '!@#$%^&*()';
  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  const pushIfItemExist = (
    arr: string[],
    item: boolean | undefined,
    dictionary: string
  ) => {
    const result = arr;

    if (item) result.push(dictionary);
    return result;
  };

  const combineDictionaries = () => {
    let results: string[] = [];
    results = pushIfItemExist(results, props.numbers, NUMBERS);
    results = pushIfItemExist(results, props.symbols, SYMBOLS);
    results = pushIfItemExist(results, props.uppercases, UPPERCASE_LETTERS);
    results = pushIfItemExist(results, props.lowercases, LOWERCASE_LETTERS);
    return results;
  };

  const generatePass = (dictionaries: string[]) => {
    if (dictionaries.length <= 0 || length <= 0) return '';

    let password = '';
    let currentArrIndex = Math.floor(Math.random() * (dictionaries.length - 1));

    for (let i = 0; i < length; i++) {
      const selectedDictionary = dictionaries[currentArrIndex];
      const randomCharIndex = Math.floor(
        Math.random() * (selectedDictionary.length - 1)
      );
      password += selectedDictionary[randomCharIndex];

      const shouldIndexReset = currentArrIndex >= dictionaries.length - 1;
      shouldIndexReset ? (currentArrIndex = 0) : currentArrIndex++;
    }
    return password;
  };

  const combinedDictionaries = combineDictionaries();

  return generatePass(combinedDictionaries);
};
