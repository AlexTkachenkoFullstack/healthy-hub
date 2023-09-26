import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    gap: 110px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProductPower = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 22px;

  @media (min-width: 834px) {
    gap: 32px;
  }
`;

export const Index = styled.p`
  color: var(--text-color-primary-white);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

export const ProductName = styled.p`
  color: var(--text-color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 260px;
  }
`;

export const Text = styled.p`
  color: var(--text-color-primary-white);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;
export const SpanElement = styled.span`
  color: var(--text-color-secondary-grey);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 6px;

  @media (min-width: 834px) {
    opacity: 0;
  }
`;

export const EditButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  padding: 0;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43; /* 142.857% */
  color: var(--text-color-button-grey);
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Svg = styled.svg`
  stroke: var(--text-color-button-grey);
  width: 16px;
  height: 16px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
