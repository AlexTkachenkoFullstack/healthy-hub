import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import SignImImageMobile from "../../assets/images/sport-and-fitness-tracker-mobile.png";
import SignImImageTablet from "../../assets/images/sport-and-fitness-tracker-tablet.png";
import SignImImageDesctop from "../../assets/images/sport-and-fitness-tracker.png";

import SignImImageMobile2к from "../../assets/images/sport-and-fitness-tracker-mobile-2x.png";
import SignImImageTablet2к from "../../assets/images/sport-and-fitness-tracker-tablet-2x.png";
import SignImImageDesctop2к from "../../assets/images/sport-and-fitness-tracker-2x.png";
import { Field} from 'formik';


export const ImageSignIn = styled.div`
@media (min-width: 320px) {
    background-image: image-set(
        url(${SignImImageMobile}) 1x,
        url(${SignImImageMobile2к}) 2x
    );
    height: 296px;
    width: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    }
@media (min-width: 834px) {
    background-image: image-set(
        url(${SignImImageTablet}) 1x,
        url(${SignImImageTablet2к}) 2x
    );
    height: 376px;
    width: 380px;
    }
@media (min-width: 1440px) {
    background-image: image-set(
        url(${SignImImageDesctop}) 1x,
        url(${SignImImageDesctop2к}) 2x
    );
    height: 588px;
    width: 592px;
    margin: 0px;
    padding-bottom: 72p
}`;

export const SignInText = styled.div`
@media (min-width: 320px) {
    margin-top: 24px;
}
@media (min-width: 834px) {
    margin-top: 60px;
    text-align: center;
}
@media (min-width: 1440px) {
    margin-top: 0px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
}`;

export const TextTitle = styled.h1`
@media (min-width: 320px) {
    font-size: 24px;
    font-weight:500;
    line-height: 30px;
    font-family: 'Poppins';
}
@media (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
}`;

export const Text = styled.p`
@media (min-width: 320px) {
    margin-top: 16px;
    font-size: 18px;
    font-weight:400;
    line-height: 24px;
    color: var(--text-color-secondary-grey);
}
@media (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
}`;

export const LabelBox = styled.label`
  margin-bottom: 14px;
`;

export const InputBox = styled.div`
  @media (min-width: 320px) {
    background: transparent;
    position: relative;
    width: 300px;
    border-radius: 12px;
    height: 36px;
    border: 1px solid var(--input-border-color-normal);
    /* margin-bottom: 16px; */
  }
  @media (min-width: 834px) {
    width: 380px;
    text-align: left;
  }
  @media (min-width: 1440px) {
    width: 212px;
    /* margin-bottom: 24px; */
  }
`;

export const InputText = styled(Field)`
  @media (min-width: 320px) {
    background: none;
    border: none;
    outline: none;
    width: 90%;
    color: var(--text-color-primary-white);
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  ::placeholder {
    color: var(--text-color-secondary-grey);
  }

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 834px) {
    width: 92%;
  }

  @media (min-width: 1440px) {
    width: 85%;
  }
`;

export const ButtonSignIn = styled.button`
  @media (min-width: 320px) {
    height: 36px;
    width: 300px;
    border-radius: 12px;
    background-color: var(--bg-button-color);
    border: none;
  }
  @media (min-width: 834px) {
    width: 380px;
  }
  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const FotmSignIn = styled.form`
  @media (min-width: 320px) {
    margin-top: 24px;
    background-color: var(--bg-primary);
    border: none;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    margin-bottom: 16px;
    display: flex;
    align-items: flex-start;
}`;


export const TextSecond = styled.p`
  @media (min-width: 320px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--text-color-button-grey);
  }
`;

export const TextSignUp = styled(NavLink)`
  @media (min-width: 320px) {
    font-size: 14px;
    font-weight: 500;
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
  }
`;

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
  }
`;

export const SignInContainer = styled.div`
  @media (min-width: 320px) {
    padding-bottom: 40px;
    padding-top: 24px;
  }
  @media (min-width: 834px) {
    padding-bottom: 60px;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding-right: 150px;
    padding-left: 150px;
    align-items: flex-end;
  }
`;

export const TextFogot = styled(NavLink)`
  @media (min-width: 320px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
    color: var(--text-color-secondary-grey);
    margin-bottom: 68px;
  }
  @media (min-width: 834px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0px;
    text-align: center;
}`;

export const InputBox = styled.label`
//   background: transparent;
//   position: relative;

`;

export const IconTextPosition = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(-50%, -50%);
`;
export const ValidationError = styled.span`
@media (min-width: 320px) {
    color: #e74a3b;
    font-family: Poppins;
    font-size: 12px;
    margin-top: -13px;
    margin-bottom: 14px;
    font-weight: 400;
    line-height: 1.17;
}
`;
export const InputContainer = styled.div`
  background: transparent;
  position: relative;
//   border: 1px solid var(--input-border-color-normal);
  border-radius: 12px;
`;
export const InputContainerError = styled.div`
  background: transparent;
  position: relative;
  border: 1px solid var(--input-border-color-error);
  border-radius: 12px;
`;

export const Box = styled.div`

@media (min-width: 1440px) {
    padding-right: 35px;
    padding-left: 35px;
}`;

