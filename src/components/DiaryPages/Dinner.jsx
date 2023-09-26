import React from 'react';
import TitlePeriod from './TitlePeriod/TitlePeriod';
// import sprite from '../../assets/images/icons/icons.svg';
import dinnerImg from '../../assets/images/meal-periods/dinner.png';
import dinnerImg2x from '../../assets/images/meal-periods/dinner-2x.png';

import FoodList from './FoodList/FoodList';
import { useSelector } from 'react-redux';
import {
  CardContainer,
  // Container,
  CardTitleContainer,
  Title,
} from './DiaryCard.styled';

const Dinner = () => {
  const product = useSelector(state => state.foodIntake.food.dinner);
  return (
    <CardContainer>
      {/* <Container> */}
        <CardTitleContainer>
          <img
            srcSet={`${dinnerImg} 1x, ${dinnerImg2x} 2x`}
            src={dinnerImg}
            alt="dinner"
            width="32"
            height="32"
          />
          <Title>Dinner</Title>
        </CardTitleContainer>

        <TitlePeriod product={product} />
      {/* </Container> */}

      <FoodList type="dinner" product={product} />
    </CardContainer>
  );
};

export default Dinner;
