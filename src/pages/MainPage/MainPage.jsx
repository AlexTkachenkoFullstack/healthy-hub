import { ReactComponent as ArrowRigth } from '../../assets/images/icons/arrow-right.svg';
import { DailyGoalInfo } from './DailyGoalInfo';
import { FoodInfo } from './FoodInfo';
import { WaterInfo } from './WaterInfo';
import { DiaryInfo } from './DiaryInfo';
import { RecommendedFood } from './RecommendedFood';
import {
  DiaryAndRecommendFoodWrap,
  ElementsWrapper,
  GoalLink,
  LinkWrapper,
  MainTitle,
  TitleWrapper,
} from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <TitleWrapper>
        <MainTitle>Today</MainTitle>
        <LinkWrapper>
          <GoalLink to="dashboard">On the way to the goal</GoalLink>
          <ArrowRigth />
        </LinkWrapper>
      </TitleWrapper>

      <ElementsWrapper>
        <DailyGoalInfo />
        <WaterInfo />
        <FoodInfo />
      </ElementsWrapper>
      <DiaryAndRecommendFoodWrap>
        <DiaryInfo />
        <RecommendedFood />
      </DiaryAndRecommendFoodWrap>
    </>
  );
};

export default MainPage;
