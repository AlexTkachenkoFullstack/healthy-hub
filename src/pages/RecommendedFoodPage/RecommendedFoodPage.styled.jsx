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

export const PhotoPage = styled.img`
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
export const ProductsList = styled.ul`
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    }
    
`
export const ProductItem = styled.li`
    @media (min-width: 834px) {
    display: flex;
    flex-basis: calc((100% - 160px) / 2);
    justify-content: center;
    }
`
