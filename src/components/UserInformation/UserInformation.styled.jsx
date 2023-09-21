import styled from 'styled-components';

export const Form = styled.form`
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
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;

  @media (min-width: 834px) {
    width: 219px;
  }
`;

export const Input = styled.input`
  padding: 8px 10px;
  background-color: transparent;
  color: var(--text-color-primary-white);
  font-size: 14px;
  line-height: 1.43;
  border-radius: 12px;
  border: 1px solid var(--text-color-secondary-grey);
  outline: none;

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
  font-size: 14px;
  line-height: 1.43;
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

export const ErrorMessage = styled.p`
  color: var(--input-border-color-error);
  font-size: 12px;
  line-height: 1.17;
  margin-top: 4px;
`;
