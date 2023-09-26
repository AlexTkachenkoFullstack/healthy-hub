import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

`;

export const Item = styled.div`
grid-column: span calc(2 - 0.2); 
&:first-child {
    grid-column: span 2;
  }
  
  &:nth-child(4),
  &:nth-child(5) {
    grid-column: span 2;
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

  @media (min-width: 834px) {
    opacity: 0;
  }
`;

//   @media (min-width: 1440px) {

//   }

export const ProductName = styled.p`
  color: var(--text-color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductPower = styled.div`
  display: flex;
  gap: 22px;
`;
