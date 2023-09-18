import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  column-gap: 20px;
  width: 300px;
  height: 86px;
  border-radius: 12px;
  padding: 20px 24px;

  background-color: var(--bg-secondary);

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`;

export const CardImage = styled.div`
  width: 46px;
  height: 46px;
`;

export const InfoWrap = styled.div`
  width: 186px;
  height: 46px;
  overflow: hidden;

  font-family: Poppins;
  font-style: normal;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const ValueWrap = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const Calories = styled.p`
  font-weight: 500;
  margin-left: 6px;
  color: var(--text-color-secondary-grey);
`;
