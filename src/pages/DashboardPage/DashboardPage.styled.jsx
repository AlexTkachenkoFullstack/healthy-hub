import styled from 'styled-components';

export const Frame = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const GraphicsFrame = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-bottom: 27px;

  @media screen and (min-width: 834px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const GraficFrame = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const GraphicHeader = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    justify-content: left;
    gap: 40px;
  }
`;

export const GraphicTitle = styled('p')`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144.44%;
  color: var(--text-color-primary-white);

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 145.5%;
  }
`;

export const Avarage = styled('p')`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 143%;
  color: var(--text-color-primary-white);
`;

export const Value = styled('span')`
  font-weight: 500;
  margin-left: 6px;
`;

export const GraphicBody = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 780px;
  height: 382px;
  background-color: var(--bg-secondary);
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 382px;
  }
`;

export const WeightBody = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

export const WeigthFrame = styled('div')`
  width: 780px;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: center;
  padding: 24px 24px 36px 24px;
  border-radius: 12px;
  background-color: var(--bg-secondary);

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;

export const WeigthItem = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: var(--text-color-primary-white);
`;

export const WeightData = styled('div')`
  font-size: 14px;
  line-height: 143%;
`;

export const WeightDate = styled('div')`
  font-size: 10px;
  line-height: 140%;
  color: var(--text-color-secondary-grey);
`;

export const CaloriesFrame = styled('div')``;
export const WaterFrame = styled('div')``;

export const ScrollWrap = styled('div')`
  @media screen and (max-width: 833px) {
    width: 310px;
    padding-bottom: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      height: 8px;
      width: 94px;

      background-color: var(--bg-secondary);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
    }
  }
`;
