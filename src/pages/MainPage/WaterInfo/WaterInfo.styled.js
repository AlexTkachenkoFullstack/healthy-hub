import styled from 'styled-components';
import { ReactComponent as Icon } from '../../../assets/images/icons/add.svg';

export const WaterTitle = styled.h2`
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

export const WaterInfoCard = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;

    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`;

export const Level = styled.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: var(--bg-primary);
  padding: 7px;
`;

export const WaterPercentage = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({ $offset }) => $offset}px);
  color: ${({ $percentColor }) => $percentColor};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const WaterBar = styled.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`;

export const InfoTitle = styled.p`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ValueWrap = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`;

export const InfoNumber = styled.p`
  display: flex;
  align-items: center;
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0px;
  }
`;

export const Unit = styled.span`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`;

export const LeftInfo = styled.p`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const LeftNumber = styled.span`
  color: var(--text-color-secondary-grey);
  font-weight: 500;
  margin-left: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: var(--input-border-color-normal);

  color: var(--bg-secondary);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const AddIcon = styled(Icon)`
  stroke: var(--text-color-button-black);
`;
