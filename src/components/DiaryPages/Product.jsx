import React from 'react';

const Product = ({ product }) => {
  const { name, carbohydrates, protein, fat } = product;

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
      </div>
    </>
  );
};

export default Product;
