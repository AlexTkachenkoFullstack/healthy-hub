import { useEffect, useState } from 'react';

import { ReactComponent as ArrowRigth } from '../../assets/images/icons/arrow-right.svg';
import { DailyGoalInfo } from './DailyGoalInfo';
import { FoodInfo } from './FoodInfo';
import { WaterInfo } from './WaterInfo';
import { DiaryInfo } from './DiaryInfo';
import { RecommendedFood } from './RecommendedFood';
import { AddWaterIntakeModal } from 'components/AddWaterIntakeModal';

import {
  DiaryAndRecommendFoodWrap,
  ElementsWrapper,
  GoalLink,
  LinkWrapper,
  MainTitle,
  TitleWrapper,
} from './MainPage.styled';

const MainPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleIsOpenModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  useEffect(() => {
    isOpenModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [isOpenModal]);

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
        <WaterInfo handleModal={toggleIsOpenModal} />
        <FoodInfo />
      </ElementsWrapper>
      <DiaryAndRecommendFoodWrap>
        <DiaryInfo />
        <RecommendedFood />
      </DiaryAndRecommendFoodWrap>
      {isOpenModal && <AddWaterIntakeModal handleModal={toggleIsOpenModal} />}
    </>
  );
};

export default MainPage;
