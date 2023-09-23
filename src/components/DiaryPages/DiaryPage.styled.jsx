import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;  
`;

export const SvgArrowRight = styled.svg`
  stroke: var(--icon-color-white); 
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
`;

export const SvgEdit = styled.svg`
  stroke: var(--icon-color-white);   
  width: 16px;
  height: 16px;
`;

export const ImgBreakfast = styled.img`
  background-image: url('../../assets/images/meal-periods/breakfast.png');
  width: 32px;
  height: 32px;
  @media (min-width: 1440px) {
    background-image: url('../../assets/images/meal-periods/breakfast-2x.png');
    width: 64px;
    height: 64px;
  }
`;

export const ImgDinner = styled.img`
  background-image: url('../../assets/images/meal-periods/dinner.png');
  width: 32px;
  height: 32px;
  @media (min-width: 1440px) {
    background-image: url('../../assets/images/meal-periods/dinner-2x.png');
    width: 64px;
    height: 64px;
  }
`;

export const ImgLunch = styled.img`
  background-image: url('../../assets/images/meal-periods/lunch.png');
  width: 32px;
  height: 32px;
  @media (min-width: 1440px) {
    background-image: url('../../assets/images/meal-periods/lunch-2x.png');
    width: 64px;
    height: 64px;
  }
`;

export const ImgSnack = styled.img`
  background-image: url('../../assets/images/meal-periods/snack.png');
  width: 32px;
  height: 32px;
  @media (min-width: 1440px) {
    background-image: url('../../assets/images/meal-periods/snack-2x.png');
    width: 64px;
    height: 64px;
  }
`;

export const TitlePage = styled.h2`
  display: inline;
  font-size: 24px;
`;

export const SectionDiary = styled.section`
  display: flex;
  flex-wrap: wrap;
  // max-width: 676px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding: 0 14px;
`;
export const TitleDiv = styled.div`
  display: flex;  
  flex-wrap: wrap;
  /* max-width: 676px; */
  align-items: flex-end;
  /* justify-content: space-between; */
  gap: 20px;
`;

export const NamePeriodH3 = styled.h3`
  display: inline;
  font-size: 18px;
`;

export const IngredientSpan  = styled.span`
  font-size: 18px;
`;

const fontNorm = `
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43; /* 20px;  142.857% */
`

export const TextSpan  = styled.span`
  font-size: 14px;
  ${fontNorm}
  color: var(--text-color-primary-white);  
`;

export const TextIndexSpan  = styled.span`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line - height: 1.43; /* 20px;  142.857% */
  color: var(--input-border-color-normal);  
`;

export const ListMeatContainer = styled.div`
  margin-left: 0;
  margin-top: 6px;
  padding-left: 0;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  // background-color: green;  
  padding: 0 14px 32px;
  // overflow: hidden;
  // width: 676px;
  heigth: 240px;
  overflow-y: auto;
`;

export const Li = styled.li`
  list-style-type: none;
  margin-top: 32px;
`;
export const Ul = styled.ul`
  margin-left: 0;
  padding-left: 0;
  // width: 676px;
  heigth: 240px;
`;

// @media (min-width: 834px) {
//     display: flex;
//     align-items: center;
//     gap: 40px;
//   }

//   @media (min-width: 1440px) {
//     gap: 80px;
//   }

export const ItemFoodName = styled.input`
  color: var(--text-color-primary-white);

  font-size: 14px;
  ${fontNorm} 
  border: none;
  background-color: transparent;
  width: 260px; 
  outline:none;
`;

export const ItemFoodCarbon = styled.input`
  color: var(--text-color-primary-white);
  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  width: 80px;
  outline:none;
`;

export const ItemFoodProt = styled.input`
  color: var(--text-color-primary-white);

  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  width: 80px;
  outline:none;
`;

export const ItemFoodFat = styled.input`
  color: var(--text-color-primary-white);

  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  width: 80px;
  outline:none;
`;

export const ItemFoodIndex = styled.div`
  color: var(--text-color-primary-white);

  font-size: 14px;
  ${fontNorm}
  // border: none;
  background-color: transparent;
  width: 16px;
`;
