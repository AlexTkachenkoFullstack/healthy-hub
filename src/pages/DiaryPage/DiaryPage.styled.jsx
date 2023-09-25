// import styled, { createGlobalStyle } from "styled-components";

// export const GlobalStyles = createGlobalStyle`
//   /* Приховуємо полосу прокрутки в WebKit (Chrome, Safari) */
//   ::-webkit-scrollbar {
//     width: 0;
//     height: 0;
//   }

//   /* Приховуємо полосу прокрутки в Firefox */
//   * {
//     scrollbar-width: none;
//   }
// `;

// export const ButtonStyle = styled.button`
//   background-color: transparent;
//   border: none;  
// `;

// export const SvgArrowRight = styled.svg`
//   stroke: var(--icon-color-white); 
//   transform: rotate(180deg);
//   width: 24px;
//   height: 24px;
// `;

// export const SvgEdit = styled.svg`
//   stroke: var(--icon-color-white);   
//   width: 16px;
//   height: 16px;
// `;

// export const TitlePage = styled.h2`
//   display: inline;
//   font-size: 24px;
// `;

// export const SectionDiary = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   // max-width: 676px;
//   align-items: flex-end;
//   justify-content: space-between;
//   gap: 20px;
//   padding: 0 14px;
// `;
// export const TitleDiv = styled.div`
//   display: flex;  
//   flex-wrap: wrap;
//   /* max-width: 676px; */
//   align-items: flex-end;
//   /* justify-content: space-between; */
//   gap: 20px;
// `;

// export const NamePeriod = styled.h3`
//   font-size: 18px;
// `;

// export const Ingredient  = styled.span`
//   font-size: 18px;
// `;

// const fontNorm = `
//   font-family: Poppins;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.43; /* 20px;  142.857% */
// `

// export const TextSpan  = styled.span`
//   font-size: 14px;
//   ${fontNorm}
//   color: var(--text-color-primary-white);  
// `;

// export const TextIndexSpan  = styled.span`
//   font-family: Poppins;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line - height: 1.43; /* 20px;  142.857% */
//   color: var(--input-border-color-normal);  
// `;


// export const ListMeatContainer = styled.ul`
//   /* Общие стили для полосы прокрутки */
//   &::-webkit-scrollbar {
//     width: 0;
//     height: 0;
//   }

//   /* Стили для полосы прокрутки при фокусировке элемента */
//   &:focus::-webkit-scrollbar {
//     width: 10px;
//     height: 10px;
//   }

//   /* Стили для полосы прокрутки при наведении на элемент */
//   &:hover {
//     scrollbar-width: thin;
//   }

//   margin-left: 0;
//   padding-left: 0;
//   border-radius: 12px;
//   background-color: var(--bg-secondary);
//   background-color: green;  
//   padding: 0 14px;
// `;

// export const Li = styled.li`
//   list-style-type: none;
// `;

// // @media (min-width: 834px) {
// //     display: flex;
// //     align-items: center;
// //     gap: 40px;
// //   }

// //   @media (min-width: 1440px) {
// //     gap: 80px;
// //   }

// export const ItemFoodName = styled.input`
//   color: var(--text-color-primary-white);

//   font-size: 14px;
//   ${fontNorm} 
//   border: none;
//   background-color: transparent;
//   width: 260px; 
// `;

// export const ItemFoodCarbon = styled.input`
//   color: var(--text-color-primary-white);
//   font-size: 14px;
//   ${fontNorm}
//   border: none;
//   background-color: transparent;
//   width: 80px;
// `;
// export const ItemFoodProt = styled.input`
//   color: var(--text-color-primary-white);

//   font-size: 14px;
//   ${fontNorm}
//   border: none;
//   background-color: transparent;
//   width: 80px;
// `;
// export const ItemFoodFat = styled.input`
//   color: var(--text-color-primary-white);

//   font-size: 14px;
//   ${fontNorm}
//   border: none;
//   background-color: transparent;
//   width: 80px;
// `;
// export const ItemFoodIndex = styled.div`
//   color: var(--text-color-primary-white);

//   font-size: 14px;
//   ${fontNorm}
//   border: none;
//   background-color: transparent;
//   width: 16px;
// `;


// // li {
// //   list-style-type: none;
// //   /* Убираем маркеры */
// // }

// // ul {
// //   margin-left: 0;
// //   /* Отступ слева в браузере IE и Opera */
// //   padding-left: 0;
// //   /* Отступ слева в браузере Firefox, Safari, Chrome */
// // }


// // export const IngredientDiv  = styled.div`
// //   font-size: 18px;
// // `;



// // export const HeaderButtonContainer = styled.div`
// //   display: none;

// //   @media (min-width: 834px) {
// //     display: flex;
// //     align-items: center;
// //     gap: 40px;
// //   }

// //   @media (min-width: 1440px) {
// //     gap: 80px;
// //   }
// // `;

// // export const UserInfoButton = styled.button`
// //   border: none;
// //   padding: 0;
// //   display: flex;
// //   align-items: center;
// //   background: transparent;
// // `;

// // export const UserName = styled.p`
// //   font-size: 12px;
// //   line-height: 1.43;
// //   color: var(--text-color-primary-white);
// //   margin-right: 6px;

// //   @media (min-width: 834px) {
// //     font-size: 14px;
// //   }
// // `;

// // export const UserSvg = styled.svg`
// //   width: 24px;
// //   height: 24px;
// //   stroke: var(--icon-color-white);
// //   margin-right: 4px;

// //   @media (min-width: 834px) {
// //     width: 28px;
// //     height: 28px;
// //   }
// // `;


// // export const BtnBack



// // export const ModalContainer = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   background-color: rgba(0, 0, 0, 0.5);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // export const ModalContent = styled.div`
// //   background-color: white;
// //   padding: 20px;
// //   border-radius: 4px;
// // `;

// // export const ButtonGroup = styled.div`
// //   display: flex;
// //   justify-content: flex-end;
// //   margin-top: 20px;
// // `;

// // export const Button = styled.button`
// //   margin-left: 10px;
// // `;