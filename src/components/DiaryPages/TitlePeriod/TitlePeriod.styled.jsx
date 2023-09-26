import styled from 'styled-components';

export const PeriodContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: var(--text-color-primary-white);
`;

export const Span = styled.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
  margin-left: 4px;
`;

export const ProteinAndFatContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
