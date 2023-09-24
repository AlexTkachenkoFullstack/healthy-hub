import React from 'react';
import { useSelector } from 'react-redux';
import {
  ListMeatContainer,
  ButtonStyle,
  TextIndexSpan,
  Li,
  ItemFoodIndex,
  ItemFoodName,
  ItemFoodFat,
  ItemFoodCarbon,
  ItemFoodProt,
} from './DiaryPage.styled';
import Product from './Product';
import RecordDiaryModal from 'components/RecordDiaryModal';

const FoodList = () => {
  const breakfast = useSelector(state => state.foodIntake.food.breakfast);

  return (
    <ListMeatContainer style={{ height: '240px' }}>
      <Li>
        {breakfast.map(item => (
          <Product key={item.id} type="breakfast" product={item} />
        ))}
      </Li>
      <ButtonStyle>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>
      <RecordDiaryModal type="breakfast" />
      {/* <ModalWindow type='breakfast' /> */}
    </ListMeatContainer>
  );
};

export default FoodList;
