import React from 'react';
import { NamePeriod, IngredientSpan } from './DiaryPage.styled';

const TitlePeriod = () => {
  // const sumCarb = Math.round(data.reduce((acc, val) => acc + val.nutrition.carbohydrates, 0)*100)/100;
  // const sumProt = Math.round(data.reduce((acc, val) => acc + val.nutrition.protein, 0)*100)/100;
  // const sumFat = Math.round(data.reduce((acc, val) => acc + val.nutrition.fat, 0)*100)/100;

  return (
    <>
      <NamePeriod>Breakfast</NamePeriod>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Carbonohidrates: </IngredientSpan>
        <IngredientSpan>SumCarb</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Protein: </IngredientSpan>
        <IngredientSpan>SumProtein</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Fat: </IngredientSpan>
        <IngredientSpan>sumFat</IngredientSpan>
      </div>
    </>
  );
};

export default TitlePeriod;
