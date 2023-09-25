import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.main`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`;

export const MainTitle = styled.h1`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const GoalLink = styled(Link)`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-right: 6px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ElementsWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`;

export const DiaryAndRecommendFoodWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 178px;
  }
`;
