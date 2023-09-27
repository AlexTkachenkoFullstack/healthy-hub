import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonStyle, TextIndexSpan } from '../DiaryPage.styled';
import { Container } from './FoodList.styled';
import Product from '../Product';

import { fetchFoodIntake, postFoodIntake } from 'redux/diary/operations';
import RecordDiaryModal from 'components/RecordDiaryModalNew/RecordDiaryModal';
import { getFirstLoad } from 'redux/diary/selectors';

const FoodList = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const firstLoad = useSelector(getFirstLoad);
  const arrayMeal = useSelector(state => state.foodIntake.food[type]);

  useEffect(() => {
    if (!firstLoad) {
      dispatch(fetchFoodIntake());
    }
  }, [firstLoad, dispatch]);

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
      {arrayMeal && arrayMeal.length > 0 ? (
        arrayMeal?.map((item, index) => (
          <Product key={item.ident} index={index} type={type} product={item} />
        ))
      ) : (
        <p
          style={{
            display: 'none',
          }}
        >
          no data
        </p>
      )}
      <ButtonStyle onClick={openModal}>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>
      {isModalOpen && (
        <RecordDiaryModal
          type={type}
          onClose={closeModal}
          onSubmit={data => {
            dispatch(postFoodIntake({ type, product: data }));
            handleDataUpdate();
          }}
        />
      )}
    </Container>
  );
};

export default FoodList;
