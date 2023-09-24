import React from 'react';
import {
  NamePeriodH3,
  IngredientSpan,
} from './DiaryPage.styled';
// import sprite from '../../assets/images/icons/icons.svg';
import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
// import breakfastImg2 from '../../assets/images/meal-periods/breakfast-2x.png';
import dinnerImg from '../../assets/images/meal-periods/dinner.png';
// import dinnerImg2 from '../../assets/images/meal-periods/dinner-2x.png';
import lunchImg from '../../assets/images/meal-periods/lunch.png';
// import lunchImg2 from '../../assets/images/meal-periods/lunch-2x.png';
import snackImg from '../../assets/images/meal-periods/snack.png';
// import snackImg2 from '../../assets/images/meal-periods/snack-2x.png';

import userF from './json/userFoot1.json';

const TitlePeriod = indexList => {
  // downloadObjectAsJson();
  const { breakfast, lunch, dinner, snack } = userF;
  // const windowInnerWidth = document.documentElement.clientWidth;
    
  let data = {};
  let imgPeriod;
  let namePeriod;

  if (indexList.data === 'b') {
    data = breakfast.slice(0, breakfast.length - 1);
    imgPeriod = breakfastImg;
    namePeriod = 'Breakfast';
  } else if (indexList.data === 'l') {
    data = lunch.slice(0, lunch.length - 1);
    imgPeriod = lunchImg;
    namePeriod = 'Lunch';
  } else if (indexList.data === 'd') {
    data = dinner.slice(0, dinner.length - 1);
    imgPeriod = dinnerImg;
    namePeriod = 'Dinner';
  } else if (indexList.data === 'c') {
    data = snack.slice(0, snack.length - 1);
    imgPeriod = snackImg;
    // imgPeriod = windowInnerWidth > 1200 ? snackImg : snackImg2;
    namePeriod = 'Snack';
  }
// {windowInnerWidth < 863 ? "Carb.:" : "Carbonohidrates:"}

  const sumCarb = Math.round(data.reduce((acc, val) => acc + val.carbohydrates, 0) * 100) / 100;
  const sumProt = Math.round(data.reduce((acc, val) => acc + val.protein, 0) * 100) / 100;
  const sumFat = Math.round(data.reduce((acc, val) => acc + val.fat, 0) * 100) / 100;

  return (
    <>
      <img src={imgPeriod} alt={namePeriod} />
      <NamePeriodH3>{namePeriod}</NamePeriodH3>

      <div style={{ display: 'inline' }}>
        <IngredientSpan> Carbonohidrates: </IngredientSpan>
        <IngredientSpan>{sumCarb}</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan> Protein: </IngredientSpan>
        <IngredientSpan>{sumProt}</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Fat: </IngredientSpan>
        <IngredientSpan>{sumFat}</IngredientSpan>
      </div>
    </>
  );
};

export default TitlePeriod;