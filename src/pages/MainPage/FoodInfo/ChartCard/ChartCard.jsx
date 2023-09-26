import { DoughnutChart } from 'components/DoughnutChart';
import {
  ChartWrapper,
  ChartElement,
  InfoWrapper,
  ElementsTitle,
  ValueWrap,
  GoalWrap,
  Value,
  Percentage,
} from './ChartCard.styled';

export const ChartCard = props => {
  const { title, chartBcg, elementGoal, elementValue } = props;

  const left = elementGoal - elementValue;
  let elementPercentage = Math.round((elementValue * 100) / elementGoal);

  if (elementPercentage === Infinity || isNaN(elementPercentage)) {
    elementPercentage = 0;
  }

  return (
    <>
      <ChartWrapper>
        <ChartElement>
          <DoughnutChart
            dailyCalories={elementGoal}
            inputValue={elementValue}
            chartBcg={chartBcg}
          />
          <Percentage>
            <p>{`${elementPercentage}%`}</p>
          </Percentage>
        </ChartElement>
        <InfoWrapper>
          <ElementsTitle>{title}</ElementsTitle>
          <ValueWrap>
            <GoalWrap>
              Goal: <Value>{elementGoal}</Value>
            </GoalWrap>
            <p>
              left: <Value>{left}</Value>
            </p>
          </ValueWrap>
        </InfoWrapper>
      </ChartWrapper>
    </>
  );
};
