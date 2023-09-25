import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Приховуємо полосу прокрутки в WebKit (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Приховуємо полосу прокрутки в Firefox */
  * {
    scrollbar-width: none;
  }
`;

export const MainTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 16px;
  font-family: Poppins;
`;

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
  margin: 6px;
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
  // padding: 0 14px;
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* max-width: 676px; */
  align-items: center;
  /* justify-content: space-between; */
  gap: 20px;
`;

export const NamePeriodH3 = styled.h3`
  display: inline;
  font-size: 18px;
`;

// export const IngredientSpan  = styled.span`
//   font-size: 18px;
// `;

const fontNorm = `
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43; /* 20px;  142.857% */
`;

export const TextSpan = styled.span`
  font-size: 14px;
  ${fontNorm}
  color: var(--text-color-primary-white);
`;

export const TextIndexSpan = styled.span`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line - height: 1.43; /* 20px;  142.857% */
  color: var(--input-border-color-normal); 
  width: 160px; 
`;

export const ListMeatContainer = styled.div`
  margin-left: 0;
  margin-top: 6px;
  padding-left: 0;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  heigth: 240px;
  overflow-y: auto;
  // width: 100vw;

  @media (min-width: 320px) {
    padding: 0 12px 16px;
    width: 300px;
  }

  @media (min-width: 834px) {
    padding: 0 14px 32px;
    width: 720px;
  }

  @media (min-width: 1440px) {
    max-width: 676px;
  }
`;

export const Li = styled.li`
  list-style-type: none;
  margin-top: 30px;

  // width: 100px;

  @media (min-width: 320px) {
    flex-wrap: wrap;
  }

  @media (min-width: 834px) {
    flex-wrap: nowrap;
}
  }

  @media (min-width: 1440px) {
    
  }
`;
export const ItemBox = styled.div`
  display: flex;

  @media (min-width: 320px) {
    flex-wrap: wrap;
  }

  @media (min-width: 834px) {
    flex-wrap: nowrap;
}
  }

  @media (min-width: 1440px) {
    
  }
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
  margin-right: 12px;
  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 164px;
  }

  @media (min-width: 834px) {
    width: 275px;
  }

  @media (min-width: 1440px) {
    width: 260px;
  }
`;

export const ItemFoodCarbon = styled.input`
  color: var(--text-color-primary-white);
  font-size: 14px;
  margin-right: 12px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;

export const ItemFoodProt = styled.input`
  color: var(--text-color-primary-white);
  margin-right: 12px;
  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;
export const ItemFoodFat = styled.input`
  color: var(--text-color-primary-white);
  margin-right: 12px;
  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;
export const ItemFoodIndex = styled.div`
  color: var(--text-color-primary-white);
  margin-right: 16px;
  font-size: 14px;
  ${fontNorm}
  // border: none;
  background-color: transparent;
  width: 16px;
`;

// export const ImgBreakfast = styled.img`
//   background-image: url('../../assets/images/meal-periods/breakfast.png');
//   width: 32px;
//   height: 32px;
//   @media (min-width: 1440px) {
//     background-image: url('../../assets/images/meal-periods/breakfast-2x.png');

//   }
// `;

// export const ImgDinner = styled.img`
//   background-image: url('../../assets/images/meal-periods/dinner.png');
//   width: 32px;
//   height: 32px;
//   @media (min-width: 1440px) {
//     background-image: url('../../assets/images/meal-periods/dinner-2x.png');
//     width: 64px;
//     height: 64px;
//   }
// `;

// export const ImgLunch = styled.img`
//   background-image: url('../../assets/images/meal-periods/lunch.png');
//   width: 32px;
//   height: 32px;
//   @media (min-width: 1440px) {
//     background-image: url('../../assets/images/meal-periods/lunch-2x.png');
//     width: 64px;
//     height: 64px;
//   }
// `;

// export const ImgSnack = styled.img`
//   background-image: url('../../assets/images/meal-periods/snack.png');
//   width: 32px;
//   height: 32px;
//   @media (min-width: 1440px) {
//     background-image: url('../../assets/images/meal-periods/snack-2x.png');
//     width: 64px;
//     height: 64px;
//   }
// `;
