import styled from "styled-components";
import RecommendedFoodPhoto from "../../assets/images/ketogenic-diet-2x.png";


export const RecommendedFood = styled.section`
    background-color: var(--bg-primary);
    color: var(--text-color-primary-white);
`
export const Title = styled.h3`
    font-family: 'Poppins';
    font-weight: 500;
    font-style: sans-serif;
`
export const DesctopContainer = styled.div`
    @media (min-width: 1440px) {
    display: flex;
    }
`

export const PhotoPage = styled.div`
   @media (min-width: 320px) {
    background-image: url(${RecommendedFoodPhoto});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    width: 312px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
   }
   @media (min-width: 834px) {
    height: 380px;
    width: 396px;
    display: block;
    }
    @media (min-width: 1440px) {
    height: 536px;
    width: 560px;
    }
`
export const ProductsList = styled.div`
    @media (min-width: 320px) {
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    }
    @media (min-width: 834px) {
    padding: 10px;
    display: flex;
    gap: 20px;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: center;
    }
    @media (min-width: 1440px) {
    height: 536px;
    width: 560px;
    }
    
`
// export const ProductItem = styled.div`
//     @media (min-width: 320px) {
//     width: 300px;
//     height: 86px;
//     }
//     @media (min-width: 834px) {
//     width: 380px;
//     display: flex;
//     flex-basis: calc((100% - 20px) / 2);
//     }
//     @media (min-width: 1440px) {
//     height: 328px;
//     }
// `
