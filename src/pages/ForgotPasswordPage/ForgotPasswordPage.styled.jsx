import styled from "styled-components";

import { NavLink } from 'react-router-dom';
import ForgotImageMobile from "../../assets/images/sport-and-fitness-tracker-mobile.png";
import ForgotImageTablet from "../../assets/images/sport-and-fitness-tracker-tablet.png";
import ForgotImageDesctop from "../../assets/images/sport-and-fitness-tracker.png";

export const ImageForgot = styled.div`
@media (min-width: 320px) {
    background-image: url(${ForgotImageMobile});
    height: 296px;
    width: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    }
@media (min-width: 834px) {
    background-image: url(${ForgotImageTablet});
    height: 376px;
    width: 380px;
    }
@media (min-width: 1440px) {
    background-image: url(${ForgotImageDesctop});
    height: 588px;
    width: 592px;
}`;

export const ForgotContainer = styled.div`
@media (min-width: 320px) {
    padding-bottom: 40px;
    padding-top: 24px;
}`;
export const ForgotText = styled.div`
@media (min-width: 320px) {
    margin-top: 24px;
}`;
export const ForgotTextTitle = styled.h1`
@media (min-width: 320px) {
    font-size: 24px;
    font-weight:500;
    line-height: 30px;
}`; 

export const Text = styled.p`
@media (min-width: 320px) {
    font-size: 18px;
    font-weight:400;
    line-height: 24px;
    color: var(--text-color-secondary-grey);
    margin-top: 16px;
}`;

export const FormForgot = styled.form`
@media (min-width: 320px) {
    background-color: var(--bg-primary);
    margin-top: 24px;
    display: flex;
    align-items: center;
    flex-direction: column; 
    border: none;
}`;

export const TextField = styled.form`
@media (min-width: 320px) {
    background-color: var(--bg-secondary);
    height: 36px;
    width: 300px;
    border-radius: 12px;
    border: 1px solid var(--input-border-color-normal);
    color: var(--text-color-primary-white);
}`;
export const ButtonFogot = styled.button`
@media (min-width: 320px) {
    height: 36px;
    width: 300px;
    border-radius: 12px;
    background-color: var(--bg-button-color);
    margin-top: 16px;
}`;
export const TextBlock = styled.div`
@media (min-width: 320px) {
    margin-top: 80px;
}
@media (min-width: 834px) {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-top: 290px;
}
@media (min-width: 1440px) {
    padding-bottom: 0px;
    margin-top: 196px;
}`;
export const TextSecond = styled.p`
@media (min-width: 320px) {
    font-size: 14px;
    font-weight:400;
    line-height: 20px;
    color: var(--text-color-button-grey)
}`;

export const TextSignUp = styled(NavLink)`
@media (min-width: 320px) {
    font-size: 14px;
    font-weight:500;
    line-height: 20px;
    color: var(--text-color-primary-white);
    margin-top: 16px;
}
@media (min-width: 834px) {
    margin-left: 16px;
    margin-top: 0px;
}
@media (min-width: 1440px) {
    padding-bottom: 0px;
    margin-top: 0px;
}`;