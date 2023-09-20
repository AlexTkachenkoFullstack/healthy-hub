import styled from 'styled-components';

export const Title = styled.h2`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const FoodInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  margin-bottom: 20px;

  font-family: Poppins;
  font-style: normal;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    height: 240px;
  }
`;

export const CaloriesChart = styled.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 38px;

  p:last-child {
    color: var(--text-color-secondary-grey);

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const ChartInfoWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
