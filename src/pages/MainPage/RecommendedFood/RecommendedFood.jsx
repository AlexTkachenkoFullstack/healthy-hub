import { ReactComponent as ArrowRigth } from '../../../assets/images/icons/arrow-right.svg';
import { RecommendedCard } from 'components/RecommendedCard';
import {
  FoodCardsWrap,
  RecommendedFoodSection,
  Title,
  LinkToRecomFood,
} from './RecommendedFood.styled';
import recommendedFood from 'RecommendedFood.json';
import { randomArray } from 'utils';

export const RecommendedFood = () => {
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
