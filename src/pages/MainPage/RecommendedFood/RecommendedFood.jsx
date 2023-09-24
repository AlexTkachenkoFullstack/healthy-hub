import { useSelector } from 'react-redux';
import { ReactComponent as ArrowRigth } from '../../../assets/images/icons/arrow-right.svg';
import { RecommendedCard } from 'components/RecommendedCard';
import {
  FoodCardsWrap,
  RecommendedFoodSection,
  Title,
  LinkToRecomFood,
} from './RecommendedFood.styled';
// import recommendedFood from 'RecommendedFood.json';
import { randomArray } from 'utils';
import { getRecommendedFood } from 'redux/recommendedFood/selectors';

export const RecommendedFood = () => {
  const recommendedFood = useSelector(getRecommendedFood);

  const arrayForRender = randomArray(recommendedFood);

  return (
    <RecommendedFoodSection>
      <Title>Recommended food</Title>
      <FoodCardsWrap>
        {arrayForRender.map(item => (
          <RecommendedCard key={item.name} info={item} />
        ))}
      </FoodCardsWrap>
      <LinkToRecomFood to="recommended-food">
        See more
        <ArrowRigth />
      </LinkToRecomFood>
    </RecommendedFoodSection>
  );
};
