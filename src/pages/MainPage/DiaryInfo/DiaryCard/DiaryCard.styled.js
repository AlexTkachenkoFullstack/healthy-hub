import styled from 'styled-components';
import { ReactComponent as Icon } from '../../../../assets/images/icons/add.svg';

export const CardWrap = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;

export const TitleWrap = styled.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-style: normal;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  color: var(--text-color-primary-white);

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbWrap = styled.p`
  width: 164px;
`;

export const ProteinWrap = styled.p`
  width: 92px;
`;

export const Value = styled.span`
  color: var(--text-color-secondary-grey);

  font-weight: 500;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: var(--icon-color-green);

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;

export const AddIcon = styled(Icon)`
  stroke: var(--icon-color-green);
`;
