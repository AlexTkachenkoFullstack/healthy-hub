export const randomArray = (array, quantity = 4) => {
  const randomNumbArr = [];
  do {
    const randomNumb = Math.round(Math.random() * (array.length - 1));
    if (randomNumbArr.includes(randomNumb)) {
      continue;
    } else {
      randomNumbArr.push(randomNumb);
    }
  } while (randomNumbArr.length !== quantity);
  // console.log(randomNumbArr);
  return array.filter((_, idx) => randomNumbArr.includes(idx));
};
