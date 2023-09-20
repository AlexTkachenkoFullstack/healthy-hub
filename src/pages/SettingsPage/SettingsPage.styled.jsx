import styled from "styled-components";
import ProfileSettingPhoto from "../../assets/images/interactive-learning-experience-2x.png";

export const SettingContainer = styled.section`
    background-color: var(--bg-primary);
    color: var(--text-color-primary-white);
`

export const Title = styled.h3`
    font-family: 'Poppins';
    font-weight: 500;
    font-style: sans-serif;
`

export const PhotoPage = styled.div`
   @media (min-width: 320px) {
    background-image: url(${ProfileSettingPhoto});
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