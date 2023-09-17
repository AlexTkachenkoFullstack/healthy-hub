import { RecommendedFood, Title, PhotoPage, ProductsList, ProductItem } from "./RecommendedFoodPage.styled";


const RecommendedFoodPage = () => {
  const recommendedProducts = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
    { id: 9, name: 'Product 9' },
    { id: 10, name: 'Product 10' }
  ];

  return (
    <RecommendedFood>
      <Title>Recommended Food Page</Title>
      <PhotoPage/>
      <ProductsList>
        {recommendedProducts.map((product) => (
          <ProductItem key={product.id}>{product.name}</ProductItem>
        ))}
      </ProductsList>
    </RecommendedFood>
  );
};

export default RecommendedFoodPage;





//  const RecommendedFoodPage = ({ title, image, recommendedProducts }) => {
//   return (
//     <RecommendedFood>
//        <Title>{title}</Title>
//         <PhotoPage src={image} alt="Recommended Food" style={{ maxWidth: '100%' }} />
//       <ProductsList>
//         {recommendedProducts.map((product, index) => (
//           <ProductItem key={index}>{product}</ProductItem>
//         ))}
//       </ProductsList>
//     </RecommendedFood>
//   );
// };

// export default RecommendedFoodPage;


// import React, { useState, useEffect } from 'react';
// import RecommendedFoodPage from './RecommendedFoodPage';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('your_data.json')
//       .then((response) => response.json())
//       .then((jsonData) => {
//         setData(jsonData);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {data && (
//         <RecommendedFoodPage
//           title={data.title}
//           image={data.image}
//           recommendedProducts={data.recommendedProducts}
//         />
//       )}
//     </div>
//   );
// };


