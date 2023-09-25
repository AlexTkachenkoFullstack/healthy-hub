import styled from 'styled-components';

export const ModalOverlay = styled.div`
  font-family: Poppins;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  position: relative;
  width: 300px;
  height: 558px;
  padding: 16px 12px 40px;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  overflow: auto;

  @media (min-width: 834px) {
    width: 676px;
    height: 408px;
    padding: 24px;
  }
`;

export const TitleText = styled.p`
  margin-bottom: 24px;
  color: var(--text-color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;

  @media (min-width: 834px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  color: var(--text-color-primary-white);
  font-size: 18px;
  line-height: 1.455;

  @media (min-width: 834px) {
    font-size: 22px;
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 834px) {
    font-size: 30px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  margin-top: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
    margin: 0;
  }
`;

export const NameField = styled.input`
  padding: 8px 10px;

  border-radius: 12px;
  border: 1px solid var(--input-border-color-normal);
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.43; /* 20px */
  width: 100%;
  outline: none;




  @media (min-width: 834px) {
    margin-top: 16px;
    width: 235px;
  }
`;

export const Field = styled.input`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--input-border-color-normal);
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.43; /* 20px */
  width: 100%;
  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: var(--text-color-secondary-grey);
  }

  @media (min-width: 834px) {
    margin-top: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  margin-top: 40px;

  @media (min-width: 834px) {
    position: absolute;
    flex-direction: row;
    bottom: 24px;
    right: 24px;
    gap: 12px;
    margin: 0;
  }
`;

export const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 14px;
  line-height: 1.43; /* 142.857% */
  margin-top: 24px;
  color: var(--text-color-active-page-green);
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  color: var(--text-color-button-black);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43; /* 142.857% */
  height: 36px;
  border-radius: 12px;
  border: none;
  background: var(--input-border-color-normal);

  @media (min-width: 834px) {
    width: 212px;
  }
`;
