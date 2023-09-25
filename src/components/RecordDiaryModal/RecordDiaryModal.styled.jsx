import styled from "styled-components";

// export const  FormRow = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(5, 5, 5, 0.8);
  display: flex;  
  justify-content: center;
  z-index: 200;
  // @media (min-width: 834px) {    
    align-items: center;
  // }
`

export const ModalDiv = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 12px;  
  // display: flex;
  // flex-direction: column;
  z-index: 201;

  @media (min-width: 320px) {
    width: 300px;
    height: 558px;
    padding: 16px 12px;
    // background-color: var(--text-color-button-black);
    // position: absolute;
    
    // top: 0%;
    // border-radius: 12px;
    // padding: 16px 12px 40px 12px;
    // display: flex;
    // flex-direction: column;
  }

  @media (min-width: 834px) {
    position: relative;
    width: 676px;
    height: 408px;
    padding: 24px; 
  }
`;

export const TitleText = styled.p`
  color: var(--text-color-primary-whit);
  font-family: Poppins;
  font-style: normal;  
  margin-bottom: 24px;

@media (min-width: 320px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25 /* 30px */;
  }

  @media (min-width: 834px) {   
    font-size: 30px;
    font-style: normal;
    line-height: 1.2 /* 36px */;
  }  
`;

export const TitleBlok = styled.p`
  display: flex;
  gap: 12px;
`
export const Img = styled.img`
  width: 32px;
  height: 32px;
`

export const Form = styled.form`
  margin-top: 24px;
  overflow-y: auto;
  @media (min-width: 320px) {
    // height: 288px;
    height: 408px;
    position: relative;
  }
  @media (min-width: 834px) {
    position: initial;
    // height: 192px;
    // height: 270px;
    height: 205px;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;

  }
`
export const FormDiv = styled.div`
  display: flex;

  @media (min-width: 320px) {    
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }

  @media (min-width: 834px) {
    // display: flex;
    column-gap: 12px;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Input = styled.input`
  height: 36px;
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-whit);
  font-family: Poppins;
  border-radius: 12px;
  padding: 8px 10px;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid var(--input-border-color-normal);
  ::placeholder {color: var(--text-color-secondary-grey)}

  // прибирає бокові стрілки в input з типом number
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &[type="number"]:hover,
  &[type="number"]:focus {
    -moz-appearance: number-input;
  }
  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  @media (min-width: 1440px) {

  }
  
  @media (min-width: 834px) {
    
  }
  @media (min-width: 320px) {    
    // width: 276px;
    // width: 100%;    
    // margin-top: 16px;    
  }  
`;



export const Span = styled.span`
  @media (min-width: 1440px) {
      color: var(--text-color-primary-whit);
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    
    line-height: 1.455; /* 36px */
  }

  @media (min-width: 834px) {
    
  }

  @media (min-width: 320px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  }
`;

export const ButtonStyleAdd = styled.button`
// @media (min-width: 320px)  {
    color: var(--text-color-active-page-green);
    margin-top: 24px;
    background-color: transparent;
    text-align: center;
    font-family: Poppins;
    line-height: 20px;
    font-weight: 500;
    font-size: 14px;
    border: none;    
  // }
  // @media (min-width: 834px)  {
    
  // }
  // @media (min-width: 1440px)  {
    
  // }
`;

export const BlockButtonStyle = styled.div`
display: flex;
@media (min-width: 320px) {  
  margin-top: 48px;
  // margin-bottom: 64px;
  flex-direction: column-reverse;
  align-items: center;
  gap: 16px;

}

@media (min-width: 834px) {
  // margin: auto;
  flex-direction: initial;
  position:absolute;
  bottom: 24px;
  right: 24px;
  // top: 82%;
  // left: 50%;
  //   transform: translateX(-50%);
}
@media (min-width: 1440px) {

}`;

export const ButtonSubmit = styled.button`
  // position: absolute;  
  color: var(--text-color-button-black);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43; /* 20px */ 
  width: 100%;
  height: 36px;
  border-radius: 12px;
  background: var(--input-border-color-normal);
  @media (min-width: 834px) {
    margin-left: 12px;
    width: 212px;
  }
`;

export const ButtonCancel = styled.button`

  background-color: transparent;
  border: none;
  color: var(--text-color-button-grey);
  width: 192px;
  // position: absolute;
  top: 45px;
  left: 25px;
  text-align: center;  
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43; /* 20px */
`;

