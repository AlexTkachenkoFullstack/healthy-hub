export const calcElementsMacros = (calories, goal) => {
  let proteinPercentage, fatPercentage, carbPercentage;

  switch (goal) {
    case 'lose':
      proteinPercentage = 0.25;
      fatPercentage = 0.2;
      break;
    case 'gain':
      proteinPercentage = 0.3;
      fatPercentage = 0.2;
      break;
    case 'maintain':
      proteinPercentage = 0.2;
      fatPercentage = 0.25;
      break;
    default:
      proteinPercentage = 0.25;
      fatPercentage = 0.2;
  }

  carbPercentage = 1 - (proteinPercentage + fatPercentage);

  const protein = Math.round((proteinPercentage * calories) / 4);
  const fat = Math.round((fatPercentage * calories) / 9);
  const carbs = Math.round((carbPercentage * calories) / 4);

  return { carbs, protein, fat };
};
