import styled from 'styled-components';

export const YourGoalContainer = styled.div`
  background-color: var(--bg-primary);
  padding: 24px 0;

  /* потім margin прибрати*/
  margin-top: 60px;

  @media (min-width: 834px) {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 104px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 290px;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    width: 380px;
    height: 368px;
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 574px;
    margin-left: 150px;
  }
`;

export const YourGoalHeader = styled.h1`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const Text = styled.p`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.44;
    text-align: center;
    width: 444px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const Label = styled.label`
  color: var(---text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 834px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const InputButton = styled.button`
  border-radius: 12px;
  /* border: none; */
  outline: none;
  background: var(--text-color-active-page-green);
  padding: 8px 10px;
  width: 300px;
  height: 36px;
  margin-top: 24px;

  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 380px;
  }
  @media (min-width: 1440px) {
    width: 212px;
    height: 36px;
  }
`;

export const BlockButton = styled.div`
  @media (min-width: 834px) {
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
