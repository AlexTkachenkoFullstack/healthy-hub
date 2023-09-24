import React from 'react';

const Product = ({ product }) => {
  
  const { name, carbohydrates, protein, fat, calories } = product;

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{carbohydrates}</p>
        <p>{protein}</p>
        <p>{fat}</p>
        <p>{calories}</p>
      </div>
    </>
  );
};

export default Product;
