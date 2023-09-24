export const randomArray = (array, quantity = 4) => {
  const randomNumbArr = [];
  if (array) {
    do {
      const randomNumb = Math.round(Math.random() * (array.length - 1));
      if (randomNumbArr.includes(randomNumb)) {
        continue;
      } else {
        randomNumbArr.push(randomNumb);
      }
    } while (randomNumbArr.length !== quantity);

    return array.filter((_, idx) => randomNumbArr.includes(idx));
  }

  return randomNumbArr;
};
