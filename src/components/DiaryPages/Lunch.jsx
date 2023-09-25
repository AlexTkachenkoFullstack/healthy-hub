import React from 'react';
import TitlePeriod from './TitlePeriod/TitlePeriod';
// import sprite from '../../assets/images/icons/icons.svg';
import lunchImg from '../../assets/images/meal-periods/lunch.png';
import lunchImg2x from '../../assets/images/meal-periods/lunch-2x.png';

import FoodList from './FoodList/FoodList';
import { useSelector } from 'react-redux';
import {
  CardContainer,
  Container,
  CardTitleContainer,
  Title,
} from './DiaryCard.styled';

const Lunch = () => {
  const product = useSelector(state => state.foodIntake.food.lunch);
  return (
    <CardContainer>
      <Container>
        <CardTitleContainer>
          <img
            srcSet={`${lunchImg} 1x, ${lunchImg2x} 2x`}
            src={lunchImg}
            alt="lunch"
            width="32"
            height="32"
          />
          <Title>Lunch</Title>
        </CardTitleContainer>

        <TitlePeriod product={product} />
      </Container>

      <FoodList type="lunch" product={product} />
    </CardContainer>
  );
};

export default Lunch;
