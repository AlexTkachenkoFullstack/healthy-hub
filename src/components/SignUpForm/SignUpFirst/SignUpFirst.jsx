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

const schema = yup.object().shape({
  name: yup.string().required('Please enter name'),
  email: yup.string().email().required('Enter correct email'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpFirst = ({ goNext, setName, setEmail, setPassword }) => {
  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;
    const res = await checkEmail(values.email);

    const { message, status } = res.data;
    if (!(message === 'Accept for registration' && status === 'available')) {
      <ErrorMessage name="email" />;
    }
    setName(name);
    setEmail(email);
    setPassword(password);
    goNext();
  };

  return (
    <SignUpFirstContainer>
      <Image src={image} alt="Sport and fitness tracker" />
      <QuestionForm>
        <MainHeader>Sign up</MainHeader>
        <Text>You need to register to use the service</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
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
