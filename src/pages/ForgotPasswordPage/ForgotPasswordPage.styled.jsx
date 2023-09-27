import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import ForgotImageMobile from "../../assets/images/sport-and-fitness-tracker-mobile.png";
import ForgotImageTablet from "../../assets/images/sport-and-fitness-tracker-tablet.png";
import ForgotImageDesctop from "../../assets/images/sport-and-fitness-tracker.png";

import ForgotImageDesctop2k from "../../assets/images/sport-and-fitness-tracker-2x.png";
import ForgotImageMobile2k from "../../assets/images/sport-and-fitness-tracker-mobile-2x.png";
import ForgotImageTablet2k from "../../assets/images/sport-and-fitness-tracker-tablet-2x.png";

export const ImageForgot = styled.div`
@media (min-width: 320px) {
    background-image: image-set(
        url(${ForgotImageMobile}) 1x,
        url(${ForgotImageMobile2k}) 2x
    );
    height: 296px;
    width: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    }
@media (min-width: 834px) {
    background-image: image-set(
            url(${ForgotImageTablet}) 1x,
            url(${ForgotImageTablet2k}) 2x
        );
    height: 376px;
    width: 380px;
    }

@media (min-width: 1440px) {
    background-image: image-set(
            url(${ForgotImageDesctop}) 1x,
            url(${ForgotImageDesctop2k}) 2x
        );
    height: 588px;
    width: 592px;
    margin-right: 48px;
}`;


export const ForgotContainer = styled.div`
@media (min-width: 320px) {
    padding-bottom: 40px;
    padding-top: 24px;
}
@media (min-width: 834px) {
    padding-bottom: 60px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 116px;
    padding-right: 116px;
    padding-bottom: 72px;
    align-items: flex-end;
    }`;


export const ForgotText = styled.div`
@media (min-width: 320px) {
    margin-top: 24px;
}
@media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
}
@media (min-width: 1440px) {
    margin-top: 0px;
    align-items: start;
}`;

export const ForgotTextTitle = styled.h1`
@media (min-width: 320px) {
    font-size: 24px;
    font-weight:500;
    line-height: 30px;
}
@media (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
}`; 

export const Text = styled.p`
@media (min-width: 320px) {
    font-size: 18px;
    font-weight:400;
    line-height: 24px;
    color: var(--text-color-secondary-grey);
    margin-top: 16px;
    white-space: break-spaces;
}
@media (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
    padding-right: 168px;
    padding-left: 168px;
    text-align: center;
    white-space: nowrap;
}
@media (min-width: 1440px) {
    padding-right: 0px;
    padding-left: 0px;
    text-align: start;
white-space: pre-wrap;
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

export const TextField = styled.input`
@media (min-width: 320px) {
    background-color: var(--bg-secondary);
    height: 36px;
    width: 300px;
    border-radius: 12px;
    border: 1px solid var(--input-border-color-normal);
    color: var(--text-color-primary-white);
    padding: 8px 10px;
    font-size: 14px;
    font-weight:400;
    line-height: 20px;
}
@media (min-width: 834px) {
    width: 380px;
}
@media (min-width: 1440px) {
    width: 212px;
}`;

export const ButtonFogot = styled.button`
@media (min-width: 320px) {
    height: 36px;
    width: 300px;
    border-radius: 12px;
    background-color: var(--bg-button-color);
    margin-top: 16px;
}
@media (min-width: 834px) {
    width: 380px;
}
@media (min-width: 1440px) {
    width: 212px;
}`;

export const TextBlock = styled.div`
@media (min-width: 320px) {
    margin-top: 80px;
}
@media (min-width: 834px) {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-top: 310px;
}
@media (min-width: 1440px) {
    padding-bottom: 0px;
    margin-top: 272px;
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