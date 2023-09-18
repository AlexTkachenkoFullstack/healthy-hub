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
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid rgba(41, 41, 40, 1);
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