export const avarageValue = data => {
  const numbers = data.map(({ data }) => data);
  const quantity = numbers.length;
  const total = numbers.reduce((prevValue, number) => {
    return prevValue + number;
  }, 0);

  const result = total / quantity;
  if (result > 999) {
    return result.toFixed(0);
  }
  if (result < 999) {
    return result.toFixed(1);
  }
};
