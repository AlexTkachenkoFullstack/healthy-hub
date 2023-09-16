import styled from 'styled-components';

export const SignUpFirstContainer = styled.div`
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    width: 592px;
  height: 588px;
  margin-left:150px;
  }
  
`;

export const MainHeader = styled.h1`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
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
  }
`;

export const InputBox = styled.div`
  border-radius: 12px;
  border: 1px solid var(--text-color-active-page-green);
  background: var(--bg-secondary);
`;

export const InputText = styled.input`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.429;
  background: transparent;
  border: none;
  outline: none;
  padding: 10px 8px;
`;

export const InputButton = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--text-color-active-page-green);
  width: 300px;
  height: 36px;

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
`;

export const Form = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const TextInEnd = styled.p`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
`;

export const SignInText = styled.div`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
`;

export const FinishBlock = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  @media (min-width: 834px) {
   flex-direction:row;
  }
`;

export const QuestionForm = styled.div`
  
`;