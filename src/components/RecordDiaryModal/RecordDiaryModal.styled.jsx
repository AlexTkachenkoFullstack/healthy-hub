import styled from "styled-components";

export const  FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`


export const ModalDiv = styled.div`
@media (min-width: 320px) {
  background-color: var(--text-color-button-black);
  position: absolute;
  width: 300px;
  height: 558px;
  top: 0%;
  border-radius: 12px;
  padding: 16px 12px 40px 12px;
    display: flex;
    flex-direction: column;
}
@media (min-width: 834px) {
  width: 300px;
  height: 558px;
}
@media (min-width: 1440px) {
    position: fixed;
  top: 30%;
  left: 30%;
  width: 676px;
  height: 408px;
  padding: 24px;
  background-color: var(--bg-secondary);
}`;



export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonStyleAdd = styled.button`
@media (min-width: 320px)  {
  background-color: transparent;
  text-align: center;
  font-family: Poppins;
  line-height: 20px;
  font-weight: 500;
   font-size: 14px;
   border: none;
   
}
@media (min-width: 834px)  {
  
}
@media (min-width: 1440px)  {
  
}
`; 
export const ButtonSubmit = styled.button`
  margin-left: 12px;
  color: var(--text-color-button-black);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */ 
  width: 212px;
  height: 36px;
  border-radius: 12px;
  background: var(--input-border-color-normal);
`;

export const Field = styled.input`
  @media (min-width: 320px) {
 height: 36px;
 width: 276px;
background-color: var(--bg-secondary);
color: var(--text-color-primary-whit);
font-family: Poppins;
 border-radius: 12px;
  margin-top: 16px;
  padding: 8px 10px;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
 border: 1px solid var(--input-border-color-normal);
  ::placeholder {color: var(--text-color-secondary-grey)}
  }
  @media (min-width: 834px) {
    
  }
  @media (min-width: 1440px) {
   
}
  
`;

export const TitleText = styled.p`
@media (min-width: 320px) {

font-weight: 500;
line-height: 30px;
}
@media (min-width: 834px) {
  
}
@media (min-width: 1440px) {
  margin-bottom: 24px;
  color: var(--text-color-primary-whit);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
}
  
`;

export const FormDiv = styled.div`
@media (min-width: 320px) {
    display: flex;
    flex-direction: column;
}

@media (min-width: 834px) {
    
}
@media (min-width: 1440px) {
  display: flex;
  column-gap: 12px;
  justify-content: space-between;
}`;

export const Span = styled.span`
@media (min-width: 320px) {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
@media (min-width: 834px) {
  
}
@media (min-width: 1440px) {
    color: var(--text-color-primary-whit);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  
  line-height: 1.455; /* 36px */
}

`;


export const BlockButtonStyle = styled.div`
@media (min-width: 320px) {

  position:absolute;
   top: 82%;
   left: 50%;
    transform: translateX(-50%);
}

@media (min-width: 834px) {
    
}
@media (min-width: 1440px) {

}`;

export const ButtonStyle = styled.div`
@media (min-width: 320px) {
  
}

@media (min-width: 834px) {
    
}
@media (min-width: 1440px) {

}`;

