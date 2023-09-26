import React, { useState } from 'react';
import EditBtn from './EditBtn';
import EditDiaryModal from '../EditDiaryModal/EditDiaryModal';
import { updateFoodIntake, fetchFoodIntake } from 'redux/diary/operations';
import { useDispatch } from 'react-redux';

import {
  ProductContainer,
  Text,
  SpanElement,
  ProductName,
  // ProductInfo,
  ProductPower,
  Item
} from '../DiaryPages/Product.styled';

const Product = ({ product, type, index }) => {
  const dispatch = useDispatch();
  const { name, carbonohidrates, protein, fat, ident } = product;
  console.log(ident);
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
      <ProductContainer>
        <Item>{index+1}</Item>
        {/* <ProductInfo> */}
          
          <ProductName>{name}</ProductName>
          <EditBtn onClick={openModal} />
        {/* </ProductInfo> */}
        <ProductPower>
          <Text>
            <SpanElement>Carb. </SpanElement>
            {carbonohidrates}
          </Text>
          <Text>
            <SpanElement>Prot. </SpanElement>
            {protein}
          </Text>
          <Text>
            <SpanElement>Fat. </SpanElement>
            {fat}
          </Text>
        </ProductPower>
      </ProductContainer>

      {isModalOpen && (
        <EditDiaryModal
          type={type}
          onClose={closeModal}
          product={product}
          handleDataUpdate={handleDataUpdate}
          onSubmit={data => {
            console.log(data);
            dispatch(updateFoodIntake({ ident, type: type, product: data }));
          }}
        />
      )}
    </>
  );
};

export default Product;
