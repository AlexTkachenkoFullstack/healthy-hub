import {
  RecommendedFood,
  Title,
  DesctopContainer,
  StyledImg,
  ProductsList,
} from './RecommendedFoodPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedFood } from 'redux/recommendedFood/selectors';
import { fetchRecommendedFood } from 'redux/recommendedFood/operations';
import { RecommendedCard } from 'components/RecommendedCard';
import { randomArray } from 'utils';
import RecommendedFoodPhoto2x from '../../assets/images/ketogenic-diet-2x.png';
import RecommendedFoodPhoto from '../../assets/images/ketogenic-diet.png';

const RecommendedFoodPage = () => {
  const dispatch = useDispatch();
  const recommendedFood = useSelector(getRecommendedFood);

  if (!recommendedFood) {
    dispatch(fetchRecommendedFood());
  }

  return (
    <RecommendedFood>
      <Title>Recommended food</Title>
      <DesctopContainer>
        <StyledImg
          srcSet={`${RecommendedFoodPhoto} 1x, ${RecommendedFoodPhoto2x} 2x`}
          src={RecommendedFoodPhoto}
          alt="Profile Setting Photo"
        />
        {recommendedFood && (
          <ProductsList>
            {randomArray(recommendedFood, 10).map(product => (
              <RecommendedCard key={product.name} info={product} />
            ))}
          </ProductsList>
        )}
      </DesctopContainer>
    </RecommendedFood>
  );
};

export default RecommendedFoodPage;
