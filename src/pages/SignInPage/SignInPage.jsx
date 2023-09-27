import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';

import { signInSchema } from '../../components/SignInFormValidation/SignInFormValidation';
import { loginThunk } from '../../redux/auth/operations';

import {
  ImageSignIn,
  SignInText,
  TextTitle,
  Text,
  ButtonSignIn,
  FotmSignIn,
  TextSecond,
  TextSignUp,
  TextBlock,
  SignInContainer,
  TextFogot,
  IconTextPosition,
  InputBox,
  InputText,
  ValidationError,
  InputContainer,
  Box,
} from './SignInPage.styled';

import EyeOpenIcon from '../../components/SignUpForm/EyeOpenIcon';
import EyeHideIcon from '../../components/SignUpForm/EyeHideIcon';
import InputSuccessIcon from '../../components/SignUpForm/InputSuccessIcon';
import InputErrorIcon from '../../components/SignUpForm/InputErrorIcon';
import SignImImageDesctop from '../../assets/images/sport-and-fitness-tracker.png';
import SignImImageDesctop2к from '../../assets/images/sport-and-fitness-tracker-2x.png';

const initialValues = {
  email: '',
  password: '',
};
const SignInPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState('password');
  const toggleIsOpenPassword = () => {
    showPassword === 'password'
      ? setShowPassword('text')
      : setShowPassword('password');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formLogin = e.currentTarget;
    dispatch(
      loginThunk({
        email: formLogin.elements.email.value,
        password: formLogin.elements.password.value,
      })
    );
    formLogin.reset();
  };
  return (
    <>
      <SignInContainer>
        <ImageSignIn
          srcSet={`${SignImImageDesctop} 1x, ${SignImImageDesctop2к} 2x`}
          src={SignImImageDesctop}
          alt="Sing in page photo Photo"
        />
        <SignInText>
          <TextTitle>Sign in</TextTitle>
          <Text>You need to login to use the service</Text>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signInSchema}
          >
            {({ errors, touched, values }) => (
              <FotmSignIn onSubmit={handleSubmit}>
                <InputBox htmlFor="email">
                  <InputContainer
                    style={{
                      borderColor:
                        errors.email && touched.email
                          ? 'var(--input-border-color-error)'
                          : '',
                    }}
                  >
                    <InputText
                      placeholder="E-mail"
                      id="email"
                      type="email"
                      name="email"
                    />
                    <IconTextPosition
                      style={{
                        display: values.email ? 'block' : 'none',
                      }}
                    >
                      {errors.email && touched.email ? (
                        <InputErrorIcon />
                      ) : (
                        <InputSuccessIcon />
                      )}
                    </IconTextPosition>
                  </InputContainer>
                </InputBox>
                <ErrorMessage name="email">
                  {msg => <ValidationError>{msg}</ValidationError>}
                </ErrorMessage>
                <InputBox htmlFor="password">
                  <InputContainer
                    style={{
                      borderColor:
                        errors.password && touched.password
                          ? 'var(--input-border-color-error)'
                          : '',
                    }}
                  >
                    <InputText
                      placeholder="Password"
                      id="password"
                      type={showPassword}
                      name="password"
                    />
                    <IconTextPosition
                      style={{
                        display: values.password ? 'block' : 'none',
                      }}
                    >
                      <div
                        onClick={toggleIsOpenPassword}
                        alt="Show or hide password"
                      >
                        {showPassword === 'password' ? (
                          <EyeOpenIcon />
                        ) : (
                          <EyeHideIcon />
                        )}
                      </div>
                    </IconTextPosition>
                  </InputContainer>
                </InputBox>
                <ErrorMessage name="password">
                  {msg => <ValidationError>{msg}</ValidationError>}
                </ErrorMessage>
                <ButtonSignIn type="submit">Sign In</ButtonSignIn>
              </FotmSignIn>
            )}
          </Formik>
          <Box>
            <TextFogot to="/forgot-password">Forgot your password?</TextFogot>
          </Box>
          <TextBlock>
            <TextSecond>If you don't have an account yet</TextSecond>
            <TextSignUp to="/signup">Sign up</TextSignUp>
          </TextBlock>
        </SignInText>
      </SignInContainer>
    </>
  );
};
export default SignInPage;
