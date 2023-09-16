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
  Form,
  TextInEnd,
  SignInText,
  FinishBlock,
  QuestionForm,
} from './SignUpFirst.styled';

const SignUpFirst = ({ goNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = e => {
      e.preventDefault();
      // тут буде логіка відправки форми на сервер
    };
    
    return (
      <SignUpFirstContainer>
        <Image src={image} alt="Sport and fitness tracker" />
        <QuestionForm><MainHeader>Sign up</MainHeader>
        <Text>You need to register to use the service</Text>

        <Form onSubmit={handleSubmit}>
          <InputBox>
            <label htmlFor="name" />
            <InputText
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputButton type="submit" onClick={goNext}>
            Sign Up
          </InputButton>
        </Form>
        <FinishBlock>
          <TextInEnd>Do you already have an account?</TextInEnd>
          <SignInText>Sign in</SignInText>
                </FinishBlock>
            </QuestionForm>
        
      </SignUpFirstContainer>
    );
};

export default SignUpFirst;
