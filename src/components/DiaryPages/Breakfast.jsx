import React from 'react';
import TitlePeriod from './TitlePeriod';
// import sprite from '../../assets/images/icons/icons.svg';
import breakfastImg from '../../assets/images/meal-periods/breakfast.png';


import FoodList from './FoodList';

const Breakfast = () => {
  

  return (
    <>
      <img src={breakfastImg} alt="breakfast" />
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <h1>Breakfast</h1>
      <TitlePeriod />
    </div>
      <FoodList type="breakfast" />
    </>
  );
};

export default Breakfast;
