import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as BubbleSvg } from 'assets/images/icons/bubble.svg';
import { ReactComponent as MilkSvg } from '../../../assets/images/icons/milk.svg';
import {
  InfoTitle,
  DailyInfoCard,
  Title,
  InfoCardWrapper,
  InfoNumber,
  Unit,
  InfoWrapper,
} from './DailyGoalInfo.styled';

import { fetchCaloriesIntake } from 'redux/dialyGoalCalories/operations';
import { getWeight } from 'redux/auth/selectors';

export const DailyGoalInfo = ({ dailyCalories }) => {
  const dispatch = useDispatch();
  const userWeight = useSelector(getWeight);

  useEffect(() => {
    dispatch(fetchCaloriesIntake());
  }, [dispatch, userWeight]);

  return (
    <div>
      <Title>Daily goal</Title>
      <DailyInfoCard>
        <InfoCardWrapper>
          <BubbleSvg />
          <InfoWrapper>
            <InfoTitle>Calories</InfoTitle>
            <InfoNumber>{dailyCalories}</InfoNumber>
          </InfoWrapper>
          <MilkSvg />
          <InfoWrapper>
            <InfoTitle>Water</InfoTitle>
            <InfoNumber>
              1500<Unit>ml</Unit>
            </InfoNumber>
          </InfoWrapper>
        </InfoCardWrapper>
      </DailyInfoCard>
    </div>
  );
};
