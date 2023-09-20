import {
        RecommendedFood,
        Title,
        DesctopContainer,
        PhotoPage,
        ProductsList,
} from "./RecommendedFoodPage.styled";
        
import recommendedFood from 'RecommendedFood.json';
import { RecommendedCard } from "components/RecommendedCard";
import { randomArray } from 'utils';

const RecommendedFoodPage = () => {
  const recommendedProducts = randomArray(recommendedFood, 10);
  
  return (
    <RecommendedFood>
      <Title>Recommended Food Page</Title>
        <DesctopContainer>
          <PhotoPage/>
            <ProductsList>
          {recommendedProducts.map((product) => (
               <RecommendedCard key={product.name} info={product} />
              ))}
            </ProductsList>
        </DesctopContainer>
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


