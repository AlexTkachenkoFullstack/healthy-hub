import { Formik, ErrorMessage } from 'formik';
import lowQualityImage from '../../../assets/images/sport-and-fitness-tracker.png';
import highQualityImage from '../../../assets/images/sport-and-fitness-tracker-2x.png';

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
  ValidationError,
  IconTextPosition,
} from './SignUpFirst.styled';

import checkEmail from '../checkEmail';
import { signupSchema } from '../validationLibs';
import { ErrorUserModal } from '../ErrorUserModal/ErrorUserModal.jsx';
import { useState } from 'react';
import SuccessButton from '../InputSuccessIcon/InputSuccessIcon';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpFirst = ({ goNext, setName, setEmail, setPassword }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleIsOpenModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  const handleSubmit = async ({ name, email, password }) => {
    try {
      const res = await checkEmail(email.toLowerCase());

      const { message, status } = res.data;
      if (!(message === 'Accept for registration' && status === 'available')) {
        <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>;
      }
      setName(name);
      setEmail(email.toLowerCase());
      setPassword(password);
      goNext();
    } catch (error) {
      console.log(error);
      setErrorsMessage(error);
      setIsOpenModal(true);
    }
  };

  const togglePass = () => {
    const pass = document.getElementById('password');
    pass.type === 'password' ? (pass.type = 'text') : (pass.type = 'password');
  };

  const isRetinaDisplay =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;

  const image = isRetinaDisplay ? highQualityImage : lowQualityImage;

  return (
    <SignUpFirstContainer>
      <Image src={image} alt="Sport and fitness tracker" />
      <QuestionForm>
        <MainHeader>Sign up</MainHeader>
        <Text>You need to register to use the service</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signupSchema}
        >
          {({ errors, touched }) => (
            <FormStyle autoComplete="off">
              <InputBox
                htmlFor="name"
                // $showIcon={errors.name && touched.name ? 'block' : 'none'}
              >
                <InputText
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <IconTextPosition>
                  <SuccessButton />
                </IconTextPosition>
              </InputBox>

              <ErrorMessage name="name">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
              <InputBox
                htmlFor="email"
                // $showIcon={errors.name && touched.name ? 'block' : 'none'}
              >
                <InputText
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />
                <IconTextPosition>
                  <SuccessButton />
                </IconTextPosition>
              </InputBox>
              <ErrorMessage name="email">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>

              <InputBox
                htmlFor="password"
                $showIcon={
                  errors.password && touched.password ? 'block' : 'none'
                }
              >
                <InputText
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <IconTextPosition>
                  <SuccessButton />
                </IconTextPosition>
              </InputBox>

              <ErrorMessage name="password">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>

              <button type="button" onClick={togglePass}>
                Show
              </button>

              <InputButton type="submit">Sign Up</InputButton>
            </FormStyle>
          )}
        </Formik>
        <FinishBlock>
          <TextInEnd>Do you already have an account?</TextInEnd>
          <SignInText to="/signin">Sign in</SignInText>
        </FinishBlock>
      </QuestionForm>
      {isOpenModal && (
        <ErrorUserModal isOpenModal={toggleIsOpenModal}>
          <h1>Hello world</h1>
          Sorry.
          <p>{errorsMessage.response.data.message}</p>
        </ErrorUserModal>
      )}
    </SignUpFirstContainer>
  );
};

export default SignUpFirst;
