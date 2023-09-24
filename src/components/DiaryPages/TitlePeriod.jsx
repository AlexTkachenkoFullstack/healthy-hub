import React from 'react';
import { IngredientSpan } from './DiaryPage.styled';
import { useSelector } from 'react-redux';

const TitlePeriod = () => {
  const breakfast = useSelector(state => state.foodIntake.food.breakfast);

  const sumCarb =
    Math.round(
      breakfast.reduce((acc, val) => acc + val.nutrition.carbohydrates, 0) * 100
    ) / 100;
  const sumProt =
    Math.round(
      breakfast.reduce((acc, val) => acc + val.nutrition.protein, 0) * 100
    ) / 100;
  const sumFat =
    Math.round(
      breakfast.reduce((acc, val) => acc + val.nutrition.fat, 0) * 100
    ) / 100;

  return (
    <>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Carbonohidrates: </IngredientSpan>
        <IngredientSpan>{sumCarb}</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Protein: </IngredientSpan>
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
