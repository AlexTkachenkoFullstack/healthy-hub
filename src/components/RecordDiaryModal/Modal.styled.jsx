import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  width: 676px;
  height: 408px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const  ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`


export const  FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Input = styled.input`
  flex: 1;
  padding: 5px;
  margin-right: 10px;
`

export const  Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:not(.modal-close) {
  margin-right: 10px;
    }    
  &:hover {
    background-color: #0056b3;
  }
`