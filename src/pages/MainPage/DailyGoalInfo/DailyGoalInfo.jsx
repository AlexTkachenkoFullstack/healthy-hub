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

export const DailyGoalInfo = ({ dailyCalories }) => {
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
