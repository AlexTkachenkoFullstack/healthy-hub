import React from 'react';
import {
  NamePeriod,
  IngredientSpan,
} from './DiaryPage.styled';
// import sprite from '../../assets/images/icons/icons.svg';
// import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
// import breakfastImg2 from '../../assets/images/meal-periods/breakfast-2x.png';
// import dinnerImg from '../../assets/images/meal-periods/dinner.png';
// import dinnerImg2 from '../../assets/images/meal-periods/dinner-2x.png';
// import lunchImg from '../../assets/images/meal-periods/lunch.png';
// import lunchImg2 from '../../assets/images/meal-periods/lunch-2x.png';
// import snackImg from '../../assets/images/meal-periods/snack.png';
// import snackImg2 from '../../assets/images/meal-periods/snack-2x.png';

import dataBreakfast from "./json/breakfast.json";
import dataDinner from "./json/dinner.json";
import dataLunch from "./json/lunch.json";
import dataSnack from "./json/snack.json";

const TitlePeriod = (period = "breakfast") => {
  // const {period, setPeriod} = useState(period)
  let data = dataBreakfast;
  let component;
  // if (period === "breakfast") {
  //   // component = `<img src={breakfastImg} alt="Breakfast" />`
  //   component = `<img src=${breakfastImg} alt="Breakfast" />`
  // } else if (period === "dataDinner"){
  //   component = `<img src=${dinnerImg} alt="Dinner" />`    
  // } else if (period === "dataLunch"){
  //   component = `<img src=${breakfastImg} alt="Lunch" />`    
  // } else if (period === "dataSnack"){
  //   component = `<img src=${breakfastImg} alt="Snack" />`    
  // }
  if (period === "breakfast") {
    // component = `<img src={breakfastImg} alt="Breakfast" />`
    component = `<ImgBreakfast alt="Breakfast" />`;
    data = dataBreakfast;
  } else if (period === "dataDinner"){
    component = `<ImgDinner alt="Dinner" />`;
    data = dataDinner;
  } else if (period === "dataLunch"){
    component = `<ImgLunch alt="Lunch" />`;
    data = dataLunch;
  } else if (period === "dataSnack"){
    component = `<ImgSnack alt="Snack" />`  
    data = dataSnack;
  }

  const sumCarb = Math.round(data.reduce((acc, val) => acc + val.nutrition.carbohydrates, 0)*100)/100;
  const sumProt = Math.round(data.reduce((acc, val) => acc + val.nutrition.protein, 0)*100)/100;
  const sumFat = Math.round(data.reduce((acc, val) => acc + val.nutrition.fat, 0)*100)/100;

  return (    
    <>
      {/* <img src={breakfastImg} alt="Breakfast" /> */}
      {component}
      <NamePeriod>Breakfast</NamePeriod>
      <div style={{display: 'inline'}}>
        <IngredientSpan>Carbonohidrates: </IngredientSpan>
        <IngredientSpan>{sumCarb}</IngredientSpan>
      </div>
      <div style={{display: 'inline'}}>
        <IngredientSpan>Protein: </IngredientSpan>
        <IngredientSpan>{sumProt}</IngredientSpan>
      </div>
      <div style={{display: 'inline'}}>
        <IngredientSpan>Fat: </IngredientSpan>
        <IngredientSpan>{sumFat}</IngredientSpan>
      </div>
    </>
  );
}

export default TitlePeriod;