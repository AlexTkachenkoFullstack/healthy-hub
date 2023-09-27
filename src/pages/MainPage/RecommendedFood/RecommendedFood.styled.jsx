import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecommendedFoodSection = styled.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`;

export const Title = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`;

export const FoodCardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const LinkToRecomFood = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-color-secondary-gre);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-top: 16px;
`;
