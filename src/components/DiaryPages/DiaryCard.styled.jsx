import styled from 'styled-components';

export const CardContainer = styled.div`
  font-family: Poppins;

  @media (min-width: 834px) {
    
    /* display: flex;
    flex-direction: row; */
   
  }
  @media (min-width: 1440px) {
    
  }
`;
export const TabletFood = styled.div`

  @media (min-width: 834px) {  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding-right:101px;
  }`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.45; 
`;

export const DiaryCardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`;
export const PartsOfMeal = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media (min-width: 1440px) {
    display: grid;
  grid-template-columns: repeat(2, 1fr); /* Два стовпці однакової ширини */
  gap: 10px; /* Відступи між елементами */
}

  
`;
