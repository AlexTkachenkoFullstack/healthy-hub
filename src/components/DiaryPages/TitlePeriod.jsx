import React from 'react';
import { IngredientSpan } from './DiaryPage.styled';

const TitlePeriod = ({ product }) => {
  if (product.length === 0 || product === undefined) {

    return (
      <>
        <div style={{ display: 'inline' }}>
          <IngredientSpan>Carbonohidrates: </IngredientSpan>
          <IngredientSpan>0</IngredientSpan>
        </div>
        <div style={{ display: 'inline' }}>
          <IngredientSpan>Protein: </IngredientSpan>
          <IngredientSpan>0</IngredientSpan>
        </div>
        <div style={{ display: 'inline' }}>
          <IngredientSpan>Fat: </IngredientSpan>
          <IngredientSpan>0</IngredientSpan>
        </div>
      </>
      );
  }

  const sumCarbohydrates = product.reduce((acc, item) => {
    return acc + item.carbohydrates;
  }, 0);

  const sumProtein = product.reduce((acc, item) => {
    return acc + item.protein;
  }, 0);

  const sumFat = product.reduce((acc, item) => {
    return acc + item.fat;
  }, 0);

  const sumCalorises = product.reduce((acc, item) => {
    return acc + item.calories;
  }, 0);

  console.log(sumCalorises);

  return (
    <>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Carbonohidrates: </IngredientSpan>
        <IngredientSpan>{sumCarbohydrates}</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Protein: </IngredientSpan>
        <IngredientSpan>{sumProtein}</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Fat: </IngredientSpan>
        <IngredientSpan>{sumFat}</IngredientSpan>
      </div>
      {/* <p>{sumCalorises}</p>/ */}
    </>
  );
};

export default TitlePeriod;
