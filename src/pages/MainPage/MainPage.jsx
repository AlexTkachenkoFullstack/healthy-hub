import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  LinkText,
  MainContainer,
  MainTitle,
  TitleWrapper,
} from './MainPage.styled';

import { fetchCaloriesIntake } from 'redux/dialyGoalCalories/operations';
import { fetchRecommendedFood } from 'redux/recommendedFood/operations';
import { fetchWaterIntake } from 'redux/dailyWater/operations';
import { fetchFoodIntake } from 'redux/diary/operations';

import { getCaloriesGoal } from 'redux/dialyGoalCalories/selectors';
import { getWaterIntake } from 'redux/dailyWater/selectors';
import { getRecommendedFood } from 'redux/recommendedFood/selectors';
import { getFirstLoad } from 'redux/diary/selectors';

const MainPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dailyCalories = useSelector(getCaloriesGoal);
  const waterConsumtion = useSelector(getWaterIntake);
  const recomendFood = useSelector(getRecommendedFood);
  const firstLoad = useSelector(getFirstLoad);
  const dispatch = useDispatch();

  const toggleIsOpenModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  useEffect(() => {
    if (!firstLoad) {
      dispatch(fetchFoodIntake());
    }
  }, [dispatch, firstLoad]);

  useEffect(() => {
    isOpenModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [isOpenModal]);

  useEffect(() => {
    !dailyCalories && dispatch(fetchCaloriesIntake());
    !recomendFood && dispatch(fetchRecommendedFood());
    waterConsumtion === null && dispatch(fetchWaterIntake());
  }, [dispatch, dailyCalories, waterConsumtion, recomendFood]);

  return (
    <MainContainer>
      <TitleWrapper>
        <MainTitle>Today</MainTitle>
        <GoalLink to="dashboard">
          <LinkText>On the way to the goal</LinkText>
          <ArrowRigth />
        </GoalLink>
      </TitleWrapper>

      <ElementsWrapper>
        <DailyGoalInfo dailyCalories={dailyCalories} />
        <WaterInfo
          handleModal={toggleIsOpenModal}
          waterConsumtion={waterConsumtion}
        />
        <FoodInfo dailyCalories={dailyCalories} />
      </ElementsWrapper>

      <DiaryAndRecommendFoodWrap>
        <DiaryInfo />
        <RecommendedFood />
      </DiaryAndRecommendFoodWrap>

      {isOpenModal && <AddWaterIntakeModal handleModal={toggleIsOpenModal} />}
    </MainContainer>
  );
};

export default MainPage;
