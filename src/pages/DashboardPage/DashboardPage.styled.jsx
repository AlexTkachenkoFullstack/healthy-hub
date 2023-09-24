import styled from "styled-components";


export const Frame = styled('div')`
display: flex;
flex-direction: column;
`;

export const GraphicFrame = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
`;

export const GraphicBody = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary);
  padding: 14px 24px 14px 24px;
  border-radius: 12px;
  
`;

export const GraphicHeader = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  margin-bottom: 9px;
`;

export const WeightBody = styled('div')`
  display: flex;
  flex-direction: column;
 
`;

export const WeightHeader = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  margin-bottom: 9px;
`;

export const WeigthFrame = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 36px 24px;
  border-radius: 12px;
  background-color: var(--bg-secondary);
`;
export const WeigthItem = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SelectFrame = styled('div')`
margin-bottom: 16px;
 
`;

export const CaloriesFrame=styled('div')`
  width:676px;
  height: 372px;
  /* border-radius: 12px; */
`
export const WaterFrame = styled('div')`
  width: 676px;
  height: 372px;
  /* padding:14px 24px 14px 24px; */
  /* border-radius: 12px; */
`;