import styled from "styled-components";
import { Field } from 'formik';

export const YourActivityContainer = styled.div`
  background-color: var(--bg-primary);
  padding-top: 24px;

  @media (min-width: 834px) {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 104px;
  }
`;

export const YourActivityHeader = styled.h1`
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
    padding-top: 80px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 304px;
  margin-bottom: 24px;
  display: block;

  @media (min-width: 834px) {
    width: 380px;
    height: 384px;
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 598px;
    margin-left: 150px;
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
    padding-left: 0;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const LabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 834px) {
    align-items: flex-start;
    width: 458px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const Label = styled.label`
  color: var(---text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  display: grid;
  grid: repeat(1, auto) / auto-flow;
  grid-auto-rows: inherit;
  align-items: center;
  gap: 8px;
  justify-items: start;
  @media (min-width: 1440px) {
    width: 350px;
  }
`;

export const InputButton = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--text-color-active-page-green);
  padding: 8px 10px;
  width: 300px;
  height: 36px;
  margin-top: 24px;
  margin-bottom: 16px;

  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 380px;
    display: block;
    margin: 24px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    height: 36px;
    margin: 20px 0;
  }
`;
export const BackButton = styled.button`
  color: var(--text-color-secondary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  background-color: transparent;
  border: none;
  display: block;
  margin: 0 auto;
  padding-bottom: 24px;

  @media (min-width: 1440px) {
    height: 36px;
    margin-left: 82px;
  }
`;
export const CustomRadioInput = styled(Field)`
  place-content: center;
  appearance: none;
  background-color: black;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid var(--text-color-button-grey);
  border-radius: 50%;
  transform: translateY(-0.075em);

  &:checked {
    background-color: rgba(227, 255, 168, 1);
    transform: scale(1);
  }
`;
