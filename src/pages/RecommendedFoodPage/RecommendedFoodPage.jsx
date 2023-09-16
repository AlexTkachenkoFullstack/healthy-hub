import { RecommendedFood, Title, PhotoPage, ProductsList } from "./RecommendedFoodPage.styled";

const RecommendedFoodPage = ({ title, image, recommendedProducts }) => {
  return (
    <RecommendedFood>
       <Title>{title}</Title>
        <PhotoPage src={image} alt="Recommended Food" style={{ maxWidth: '100%' }} />
      <ProductsList>
        {recommendedProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ProductsList>
    </RecommendedFood>
  );
};

export default RecommendedFoodPage;


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





