import {
  ChartWrapper,
  ChartElement,
  InfoWrapper,
  ElementsTitle,
  ValueWrap,
  GoalWrap,
  Value,
} from './ChartCard.styled';

export const ChartCard = ({title}) => {
  return (
    <>
      <ChartWrapper>
        <ChartElement></ChartElement>
        <InfoWrapper>
          <ElementsTitle>{title}</ElementsTitle>
          <ValueWrap>
            <GoalWrap>
              Goal: <Value>56</Value>
            </GoalWrap>
            <p>
              left: <Value>11.2</Value>
            </p>
          </ValueWrap>
        </InfoWrapper>
      </ChartWrapper>
    </>
  );
};
