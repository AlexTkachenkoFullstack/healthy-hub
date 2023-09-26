import React from 'react';
import TitlePeriod from './TitlePeriod/TitlePeriod';
// import sprite from '../../assets/images/icons/icons.svg';
import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
import breakfastImg2x from '../../assets/images/meal-periods/breakfast-2x.png';

import FoodList from './FoodList/FoodList';
import { useSelector } from 'react-redux';
import {
  CardContainer,
  CardTitleContainer,
  Title,
  TabletFood,
} from './DiaryCard.styled';

const Breakfast = () => {
  const product = useSelector(state => state.foodIntake.food.breakfast);
  return (
    <CardContainer>
      <TabletFood>
        <CardTitleContainer>
          <img
            srcSet={`${breakfastImg} 1x, ${breakfastImg2x} 2x`}
            src={breakfastImg}
            alt="breakfast"
            width="32"
            height="32"
          />
          <Title>Breakfast</Title>
        </CardTitleContainer>

        <TitlePeriod product={product} />
      </TabletFood>

      <FoodList type="breakfast" product={product} />
    </CardContainer>
  );
};

export default Breakfast;
