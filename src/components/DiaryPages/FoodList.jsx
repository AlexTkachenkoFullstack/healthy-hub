import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ListMeatContainer,
  ButtonStyle,
  TextIndexSpan,
  Li,
} from './DiaryPage.styled';
import Product from './Product';

import { postFoodIntake } from 'redux/diary/operations';
import RecordDiaryModal from 'components/RecordDiaryModalNew/RecordDiaryModal';

const FoodList = ({ type, product}) => {
  const dispatch = useDispatch();
    console.log(product);
  
  const breakfast = useSelector(state => state.foodIntake.food[type]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ListMeatContainer style={{ height: '240px' }}>
      <Li>
        {breakfast?.map(item => (
          <Product key={item.id} type={type} product={item} />
        ))}
      </Li>
      <ButtonStyle onClick={openModal}>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>
      {isModalOpen && (
        <RecordDiaryModal
          type={type}
          onClose={closeModal}
          onSubmit={(data) => {
        
            console.log(data);
            dispatch(postFoodIntake({ type, product: data }));
            closeModal();
          }}
        />
      )}
    </ListMeatContainer>
  );
};

export default FoodList;



