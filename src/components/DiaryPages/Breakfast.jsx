import React from 'react';
import TitlePeriod from './TitlePeriod';
// import sprite from '../../assets/images/icons/icons.svg';
import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
import { ButtonStyle, TextIndexSpan } from './DiaryPage.styled';

import FoodList from './FoodList';

const Breakfast = () => {
  return (
    <>
      <img src={breakfastImg} alt="breakfast" />
      <h1>Breakfast</h1>
      <TitlePeriod />
      <FoodList />
    </>
  );
};

export default Breakfast;
