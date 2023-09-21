import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  top: 30%;
  left: 30%;
  width: 676px;
  height: 408px;
  padding: 24px;
  background-color: var(--bg-secondary);

`;

export const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;

  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */  
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
  // width: 80px;
  height: 36px;
  padding: 8px 10px;
  margin-top: 16px;
  margin-bottom: 24px;

  border-radius: 12px;
  border: 1px solid var(--input-border-color-normal);

  background-color: var(--bg-secondary);

  color: var(--text-color-primary-whit);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43; /* 20px */

  ::placeholder {color: var(--text-color-secondary-grey)}
`;

export const TitleText = styled.p`
  margin-bottom: 24px;
  color: var(--text-color-primary-whit);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2; /* 36px */
`;

export const FormDiv = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: space-between;
`;
export const Span = styled.span`
  color: var(--text-color-primary-whit);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.455; /* 36px */
`;




