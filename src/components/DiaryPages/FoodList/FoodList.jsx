import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonStyle, TextIndexSpan } from '../DiaryPage.styled';
import { Container } from './FoodList.styled';
import Product from '../Product';

import { fetchFoodIntake, postFoodIntake } from 'redux/diary/operations';
import RecordDiaryModal from 'components/RecordDiaryModalNew/RecordDiaryModal';

const FoodList = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const breakfast = useSelector(state => state.foodIntake.food[type]);
  console.log(breakfast);

  useEffect(() => {
    dispatch(fetchFoodIntake(type));
  }, [type, dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDataUpdate = () => {
    dispatch(fetchFoodIntake(type));
  };

  return (
    <Container>
      {breakfast.length > 0 ? (
        breakfast?.map(item => (
          <Product key={item.id} type={type} product={item} />
        ))
      ) : (
        <p>no data</p>
      )}
      <ButtonStyle onClick={openModal}>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>
      {isModalOpen && (
        <RecordDiaryModal
          type={type}
          onClose={closeModal}
          onSubmit={data => {
            console.log(data);
            dispatch(postFoodIntake({ type, product: data }));
            handleDataUpdate();
          }}
        />
      )}
    </Container>
  );
};

export default FoodList;
