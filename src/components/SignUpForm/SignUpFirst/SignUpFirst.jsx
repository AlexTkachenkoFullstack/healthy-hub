import { Formik, Field } from 'formik';
import React, { useState } from 'react';
import image from '../../../assets/images/sport-and-fitness-tracker.png';
import {
  SignUpFirstContainer,
  Image,
  MainHeader,
  Text,
  InputBox,
  InputText,
  InputButton,
  FormStyle,
  TextInEnd,
  SignInText,
  FinishBlock,
  QuestionForm,
} from './SignUpFirst.styled';

const SignUpFirst = ({ goNext, data }) => {
  const handleSubmit = (values, actions) => {
    goNext(values);
  };

  return (
    <SignUpFirstContainer>
      <Image src={image} alt="Sport and fitness tracker" />
      <QuestionForm>
        <MainHeader>Sign up</MainHeader>
        <Text>You need to register to use the service</Text>
        <Formik initialValues={data} onSubmit={handleSubmit}>
          <FormStyle autoComplete="off">
            <InputBox>
              <label htmlFor="name" />
              <InputText
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </InputBox>
            <InputBox>
              <label htmlFor="email" />
              <InputText
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </InputBox>
            <InputBox>
              <label htmlFor="password" />
              <InputText
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </InputBox>
            <InputButton type="submit">Sign Up</InputButton>
          </FormStyle>
        </Formik>
        <FinishBlock>
          <TextInEnd>Do you already have an account?</TextInEnd>
          <SignInText>Sign in</SignInText>
        </FinishBlock>
      </QuestionForm>
    </SignUpFirstContainer>
  );
};

export default SignUpFirst;
