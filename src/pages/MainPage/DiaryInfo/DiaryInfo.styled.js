import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const DiaryLink = styled(Link)`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 518px;

  @media screen and (min-width: 834px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
