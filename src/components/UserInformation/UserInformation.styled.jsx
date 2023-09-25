import styled from 'styled-components';
import { Field, Form } from 'formik';
import errorIcon from '../../assets/images/icons/error.svg';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 834px) {
    gap: 0;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 60px;
    justify-content: space-between;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Label = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  width: 100%;

  &::after {
    position: absolute;
    bottom: 29px;
    right: 10px;
    content: '';
    display: ${({ $showIcon }) => $showIcon};
    width: 16px;
    height: 16px;
    background-image: url('${errorIcon}');

    @media (min-width: 834px) {
      bottom: 29px;
      right: 14px;
    }
  }

  @media (min-width: 834px) {
    width: 219px;
  }
`;

export const Input = styled(Field)`
  padding: 8px 10px;
  background-color: transparent;
  color: var(--text-color-primary-white);
  font-size: 14px;
  line-height: 1.43;
  border-radius: 12px;
  border: 1px solid var(--text-color-secondary-grey);
  outline: none;
  border: ${({ borderstyle }) => borderstyle};
  width: 100%;
  font-family: Poppins;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media (min-width: 834px) {
    width: 212px;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  display: grid;
  grid: repeat(1, auto) / auto-flow;
  grid-auto-rows: inherit;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`;

export const CustomRadioInput = styled.input`
  place-content: center;
  appearance: none;
  background-color: black;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 0.15em solid var(--text-color-button-grey);
  border-radius: 50%;
  transform: translateY(-0.075em);

  &:checked {
    background-color: rgba(227, 255, 168, 1);
  }
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 12px;

  @media (min-width: 834px) {
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (min-width: 834px) {
    position: absolute;
    top: 24px;
    right: 0;
    flex-direction: row-reverse;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--bg-button-color);
  color: var(--text-color-button-black);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border: none;

  @media (min-width: 834px) {
    width: 212px;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 8px 10px;
  background: transparent;
  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border: none;

  @media (min-width: 834px) {
    width: 192px;
  }
`;

export const ErrorText = styled.p`
  color: var(--input-border-color-error);
  font-size: 12px;
  line-height: 1.17;
  margin-top: 4px;
`;

export const AvatarImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const AvatarField = styled(Field)`
  display: none;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AvatarText = styled.p`
  margin-left: 6px;
  font-size: 13px;
  line-height: 1.43;
`;
