import styled from 'styled-components';
import { Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';

export const SignUpFirstContainer = styled.div`
  background-color: var(--bg-primary);
  padding: 24px 0;

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
    margin-left: 116px;
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

export const InputBox = styled.label`
  border-radius: 12px;
  border: 1px solid var(--text-color-active-page-green);
  background: var(--bg-secondary);
`;

export const InputText = styled(Field)`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.429;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px 10px;
  width: 300px;
  :hover {
    color: var(--text-color-primary-white);
  }
`;

export const InputButton = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--text-color-active-page-green);
  padding: 8px 10px;

  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 420px;
  }

   @media (min-width: 1440px) {
      width: 212px;
    }
`;

export const FormStyle = styled(Form)`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 80px;

  @media (min-width: 834px) {
    margin-bottom: 238px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 208px;
    width:212px;
  }
`;

export const TextInEnd = styled.p`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
`;

export const SignInText = styled(NavLink)`
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
    flex-direction: row;
  }
`;

export const ErrorText = styled.div`
  position: absolute;
  top: 69px;
  left: 0;
  color: #e74a3b;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding-left: 10px;

  @media screen and (min-width: 834px) {
    left: 25px;
  }
`;
