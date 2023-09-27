import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, ErrorMessage } from 'formik';
import InputSuccessIcon from '../../components/SignUpForm/InputSuccessIcon';
import InputErrorIcon from '../../components/SignUpForm/InputErrorIcon';
import { signInSchema } from '../../components/SignInFormValidation/SignInFormValidation';
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
  Box,
  LabelBox,
} from './SignInPage.styled';
import { loginThunk } from '../../redux/auth/operations';
import { useState } from 'react';
import EyeOpenIcon from 'components/SignUpForm/EyeOpenIcon';
import EyeHideIcon from 'components/SignUpForm/EyeHideIcon';

const initialValues = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState('password');
  const dispatch = useDispatch();

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
        <ImageSignIn />
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

                <LabelBox htmlFor="email">
                  <InputBox
                    style={{
                      borderColor:
                        errors.email && touched.email
                          ? 'var(--input-border-color-error)'
                          : '',
                    }}
                  >
                    <InputText
                      placeholder="E-mail"
                      label="email"
                      type="email"
                      name="email"
                      autoComplete="off"
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
                  </InputBox>
                  <ErrorMessage name="email">
                    {msg => <ValidationError>{msg}</ValidationError>}
                  </ErrorMessage>
                </LabelBox>

                <LabelBox htmlFor="password">
                  <InputBox
                    style={{
                      borderColor:
                        errors.password && touched.password
                          ? 'var(--input-border-color-error)'
                          : '',
                    }}
                  >
                    <InputText
                      placeholder="Password"
                      label="password"
                      type={showPassword}
                      name="password"
                      autoComplete="off"
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
                  </InputBox>
                  <ErrorMessage name="password">
                    {msg => <ValidationError>{msg}</ValidationError>}
                  </ErrorMessage>
                </LabelBox>

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
