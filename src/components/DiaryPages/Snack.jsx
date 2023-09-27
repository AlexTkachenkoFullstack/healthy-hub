import React from 'react';
import TitlePeriod from './TitlePeriod/TitlePeriod';
// import sprite from '../../assets/images/icons/icons.svg';
import snackImg from '../../assets/images/meal-periods/snack.png';
import snackImg2x from '../../assets/images/meal-periods/snack-2x.png';

import FoodList from './FoodList/FoodList';
import { useSelector } from 'react-redux';
import {
  CardContainer,
  CardTitleContainer,
  Title,
  TabletFood,
} from './DiaryCard.styled';

const Snack = () => {
  const product = useSelector(state => state.foodIntake.food.snack);
  return (
    <CardContainer>
      <TabletFood><CardTitleContainer>
          <img
            srcSet={`${snackImg} 1x, ${snackImg2x} 2x`}
            src={snackImg}
            alt="snack"
            width="32"
            height="32"
          />
          <Title>Snack</Title>
        </CardTitleContainer>

        <TitlePeriod product={product} /></TabletFood>
        
     

      <FoodList type="snack" product={product} />
    </CardContainer>
  );
};

export default Snack;
