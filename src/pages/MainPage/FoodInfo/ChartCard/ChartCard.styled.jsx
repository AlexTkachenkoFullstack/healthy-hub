import styled from 'styled-components';

export const ChartWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ChartElement = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
`;

export const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ElementsTitle = styled.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const ValueWrap = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const Value = styled.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`;

export const GoalWrap = styled.p`
  width: 78px;
`;
