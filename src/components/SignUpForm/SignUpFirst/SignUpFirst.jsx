import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
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

import checkEmail from '../checkEmail';
// import signUp from '../signUp';

const schema = yup.object().shape({
  name: yup.string().required('Please enter name'),
  email: yup.string().email().required('Enter correct email'),

  password: yup
    .string()
    .matches(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*$',
      'must include at least 1 uppercase and lowercase symbols'
    )
    .matches(
      '^(?=.*\\d)(?=.*[~`!@#$%^&()_=+{}\\[\\]/|:;,"<>?]).*$',
      'must include 1 number and special symbol'
    )
    .matches('^[^А-Яа-яЇїІіЄєҐґЁё]+$', 'must include only latin letters')
    .required('Please Enter your Password'),
});

const SignUpFirst = ({ goNext, data }) => {
  const handleSubmit = async (values, actions) => {
    const res = await checkEmail(values.email);
    const { message, status } = res.data;
    if (!(message === 'Accept for registration' && status === 'available')) {
      <ErrorMessage name="email" />;
      console.log('Error');
    }
    goNext(values);
  };

  // const handleSubmit = async () => {
  //   const res = await signUp();
  //   console.log(res);
  //   console.log('User was registered!!!');
  // };

  return (
    <SignUpFirstContainer>
      <Image src={image} alt="Sport and fitness tracker" />
      <QuestionForm>
        <MainHeader>Sign up</MainHeader>
        <Text>You need to register to use the service</Text>
        <Formik
          initialValues={data}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormStyle autoComplete="off">
            <InputBox>
              <label htmlFor="name" />
              <InputText
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                // required
              />
            </InputBox>
            <ErrorMessage name="name" />
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
            <ErrorMessage name="email" />
            <InputBox>
              <label htmlFor="password" />
              <InputText
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                // required
              />
            </InputBox>
            <ErrorMessage name="password" />
            <InputButton type="submit">Sign Up</InputButton>
          </FormStyle>
        </Formik>
        <FinishBlock>
          <TextInEnd>Do you already have an account?</TextInEnd>
          <SignInText to="/signin">Sign in</SignInText>
        </FinishBlock>
      </QuestionForm>
    </SignUpFirstContainer>
  );
};

export default SignUpFirst;
