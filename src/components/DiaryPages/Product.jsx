import React, { useState } from 'react';
import EditBtn from './EditBtn';
import EditDiaryModal from '../EditDiaryModal/EditDiaryModal';
import { updateFoodIntake, fetchFoodIntake } from 'redux/diary/operations';
import { useDispatch } from 'react-redux';

const Product = ({ product, type }) => {
  const dispatch = useDispatch();
  const { name, carbohydrates, protein, fat, id } = product;
  console.log(id);
  console.log('product', product);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log('openModal');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDataUpdate = () => {
    dispatch(fetchFoodIntake(type));
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p>{name}</p>
        <p>{carbohydrates}</p>
        <p>{protein}</p>
        <p>{fat}</p>
        <EditBtn onClick={openModal} />
      </div>

      {isModalOpen && (
        <EditDiaryModal
          type={type}
          onClose={closeModal}
          product={product}
          handleDataUpdate={handleDataUpdate}
          onSubmit={data => {
            console.log(data);
            dispatch(updateFoodIntake({ id: id, type: type, product: data }));
          }}
        />
      )}
    </>
  );
};

export default Product;
