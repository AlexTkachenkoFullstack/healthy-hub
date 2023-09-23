import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import WelcomeImageMobile from "../../assets/images/sport-and-fitness-tracker-mobile.png";
import WelcomeImageTablet from "../../assets/images/sport-and-fitness-tracker-tablet.png";
import WelcomeImageDesctop from "../../assets/images/sport-and-fitness-tracker.png";

import WelcomeImageMobile2k from "../../assets/images/sport-and-fitness-tracker-mobile-2x.png";
import WelcomeImageTablet2k from "../../assets/images/sport-and-fitness-tracker-tablet-2x.png";
import WelcomeImageDesctop2k from "../../assets/images/sport-and-fitness-tracker-2x.png";

export const ImageContainerLog = styled.div`
@media (min-width: 320px) {
    background-image: image-set(
        url(${WelcomeImageMobile}) 1x,
        url(${WelcomeImageMobile2k}) 2x
    );
    margin-top: 24px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 296px;
    width: 300px;
    }
@media (min-width: 834px) {
    background-image: image-set(
        url(${WelcomeImageTablet}) 1x,
        url(${WelcomeImageTablet2k}) 2x
    );
    height: 376px;
    width: 380px;
    margin-top: 40px;
};
@media (min-width: 1440px) {
    background-image: image-set(
        url(${WelcomeImageDesctop}) 1x,
        url(${WelcomeImageDesctop2k}) 2x
    );
    height: 588px;
    width: 592px;
    margin-top: 40px;
    margin-left: 0px;
    margin-right: 0px;
};`

export const TextTitle = styled.h1`
@media (min-width: 320px) {
    margin-top: 24px;
    font-size: 24px;
    font-weight:500;
    line-height: 30px;
    font-family: 'Poppins';
    };
@media (min-width: 834px) {
    margin-top: 80px;
    text-align: center;
    line-height: 36px;
    font-size: 30px;
};
@media (min-width: 1440px) {
    margin-top: 0px;
}`

export const Text = styled.p`
@media (min-width: 320px) {
    color: var(--text-color-secondary-grey);
    margin-top: 16px;
    font-size: 18px;
    font-weight:400;
    line-height: 24px;};
@media (min-width: 834px) {
    text-align: center;
    font-size: 22px;
    line-height: 32px;
};
@media (min-width: 1440px) {
    text-align: start;
}`

export const ButtonSignIn = styled(NavLink)`
@media (min-width: 320px) {
    background-color: var(--bg-button-color);
    margin-top: 24px;
    display: inline-block; 
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    width: 142px; 
    height: 36px; 
    border-radius: 12px;
    padding: 8px 10px; 
    }
@media (min-width: 834px) {
    width: 212px; 
}`;

export const ButtonSignUp = styled(NavLink)`
@media (min-width: 320px) {
    background-color: var(--bg-primary);
    margin-top: 24px;
    color: var(--text-color-primary-white);
    display: inline-block; 
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border: none;
    text-align: center;
    margin-left: 16px;
    width: 122px; 
    height: 20px;
}
@media (min-width: 834px) {
    width: 212px; 
}`;

export const NavItem = styled.div`
@media (min-width: 834px){
    display: flex;
    align-items: center;
    justify-content: center;
}`;

export const CustomList = styled.ul`
@media (min-width: 320px){
    margin-top: 40px;
    padding: 0;}
@media (min-width: 834px) {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
    align-items: baseline;
    margin-top: 80px;
}
@media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
}`;

export const ListItem = styled.li`
@media (min-width: 320px) {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-left: 26px;
    color: var(--text-color-primary-white);
    }`;

export const Item = styled(ListItem)`
@media (min-width: 320px){
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    margin-bottom: 16px;
    &:last-child {
    margin-bottom: 0;
}`;

export const MarkerIcon = styled.div`
@media (min-width: 320px) {
    position: absolute;
    left: -25px;
    width: 8px;
    height: 8px;
    background-color: var(--icon-color-green); 
    border-radius: 50%; 
    margin-right: 8px;
}`;

export const ContainerText = styled.div`
@media (min-width: 320px) {
    padding-bottom: 40px;
    }
@media (min-width: 834px) {
    padding-left: 168px; 
    padding-right: 168px;
    }
@media (min-width: 1440px) {
    padding: 0px; 
    }`;

export const WellcomeContainer = styled.div`
@media (min-width: 1440px) {
    display: flex;
    padding-left: 116px; 
    padding-right: 116px;
    justify-content: space-between;
    align-items: center;
}`


