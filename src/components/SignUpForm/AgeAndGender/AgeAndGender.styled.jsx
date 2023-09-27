import styled from 'styled-components';
import { Field } from 'formik';

export const AgeAndGenderContainer = styled.div`
  background-color: var(--bg-primary);
  padding-top: 24px;
  padding-bottom: 24px;

  @media (min-width: 834px) {
    padding-top: 40px;
    padding-bottom: 40px;
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

export const Image = styled.img`
  width: 300px;
  height: 288px;
  margin-bottom: 24px;
  display: block;

  @media (min-width: 834px) {
    width: 380px;
    height: 366px;
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 570px;
    margin-left: 150px;
  }
`;

export const AgeAndGenderHeader = styled.h1`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  padding-left: 10px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    padding-left: 0;
  }
  @media (min-width: 1440px) {
    text-align: left;
    padding-top: 80px;
  }
`;

export const Text = styled.p`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;
  padding-left: 10px;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.44;
    text-align: center;
    width: 444px;
    padding-left: 0;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

// export const ExtraContainer = styled.div`
//   @media (min-width: 834px) {
//     padding-left: 30px;
//     padding-right: 30px;
//     margin: 0 auto;
//   }
//   @media (min-width: 1440px) {
//     padding-left: 0px;
//     padding-right: 0px;
//     margin: 0 auto;
//   }
// `;

export const ChooseText = styled.p`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const LabelBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 85px;

  @media (min-width: 834px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const InputContainer = styled.div`
  @media (min-width: 834px) {
    width: 380px;
    margin: 0 auto;

    @media (min-width: 1440px) {
      margin: 0;
    }
  }
`;

export const RadioButtonText = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-style: normal;
  color: var(---text-color-primary-white);
`;

export const RadioInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const InputBox = styled.div`
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--text-color-active-page-green);
  background: var(--bg-secondary);
  @media (min-width: 834px) {
    width: 380px;
    display: block;
    margin: 0 auto;
    @media (min-width: 1440px) {
      width: 212px;
      margin: 0;
    }
  }
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
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
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

  @media (min-width: 1440px) {
    height: 36px;
    margin-left: 82px;
  }
`;

export const CustomRadioInput = styled.span`
position: relative;
display: inline-block;
width: 12px;
height: 12px;
background-color: transparent;
border: 1px solid var(--fat-donut-color);
border-radius: 50%;
vertical-align: text-top;

&::before{
content: '';
position: absolute;
top: 50%;
left: 50%;
display: block;
width: 6px;
height: 6px;
border-radius: 50%;
background-color: var(--bg-button-color);
transform: translate(-50%, -50%) scale(0);
transition: 200ms ease-in;
}
  /* place-content: center;
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
  } */
`;

export const NativeRadioInput = styled(Field)`
opacity: 0;
z-index: 1;
cursor: pointer;
&:checked + ${CustomRadioInput}{
  &::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--bg-button-color);
    transform: translate(-50%, -50%) scale(0);
    transition: 200ms ease-in;}
}


`


export const ValidationError = styled.span`
  color: #e74a3b;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
`;

export const IconTextPosition = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`;
