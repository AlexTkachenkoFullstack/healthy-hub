import styled from 'styled-components';

export const SelectFrame = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const SelectAndBackWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  color: var(--text-color-primary-white);

  @media screen and (min-width: 834px) {
    gap: 12px;
    font-size: 30px;
    line-height: 120%;
  }
`;

export const DateTitle = styled('p')`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%;
  color: var(--text-color-primary-white);

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 133%;
  }
`;
