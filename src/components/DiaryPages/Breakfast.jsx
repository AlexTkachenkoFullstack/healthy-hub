import React from 'react';
import TitlePeriod from './TitlePeriod';
// import sprite from '../../assets/images/icons/icons.svg';
import breakfastImg from '../../assets/images/meal-periods/breakfast.png';

import FoodList from './FoodList';
import { useSelector } from 'react-redux';

const Breakfast = () => {
  const product = useSelector(state => state.foodIntake.food.breakfast);
  return (
    <>
      <img src={breakfastImg} alt="breakfast" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1>Breakfast</h1>
        <TitlePeriod product={product} />
      </div>
      <FoodList type="breakfast" product={product} />
    </>
  );
};

export default Breakfast;
