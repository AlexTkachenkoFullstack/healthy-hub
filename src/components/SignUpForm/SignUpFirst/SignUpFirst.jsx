import { Formik, ErrorMessage, getIn } from 'formik';
import lowQualityImage from '../../../assets/images/sport-and-fitness-tracker.png';
import highQualityImage from '../../../assets/images/sport-and-fitness-tracker-2x.png';

import {
  SignUpFirstContainer,
  Image,
  MainHeader,
  Text,
  InputText,
  InputButton,
  FormStyle,
  TextInEnd,
  SignInText,
  FinishBlock,
  QuestionForm,
  ValidationError,
  IconTextPosition,
  InputContainer,
} from './SignUpFirst.styled';

import checkEmail from '../checkEmail';
import { signupSchema } from '../validationLibs';
import { ErrorUserModal } from '../ErrorUserModal/ErrorUserModal.jsx';
import { useState } from 'react';
import InputSuccessIcon from '../InputSuccessIcon';
import InputErrorIcon from '../InputErrorIcon';
import EyeOpenIcon from '../EyeOpenIcon';
import EyeHideIcon from '../EyeHideIcon';

const initialValues = {
  name: '',
  email: '',
  password: '',
};


const SignUpFirst = ({ goNext, setName, setEmail, setPassword }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');
  const [showPassword, setShowPassword] = useState('password');

  const toggleIsOpenModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  const toggleIsOpenPassword = () => {
    showPassword === 'password'
      ? setShowPassword('text')
      : setShowPassword('password');
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
          {({ errors, touched, values }) => (
            <FormStyle autoComplete="off">
              <label htmlFor="name">
                <InputContainer
                  style={{
                    borderColor:
                      errors.name && touched.name
                        ? 'var(--input-border-color-error)'
                        : '',
                  }}
                >
                  <InputText
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                  <IconTextPosition
                    style={{
                      display: values.name ? 'block' : 'none',
                    }}
                  >
                    {errors.name && touched.name ? (
                      <InputErrorIcon />
                    ) : (
                      <InputSuccessIcon />
                    )}
                  </IconTextPosition>
                </InputContainer>
              </label>

              <ErrorMessage name="name">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>
              <label htmlFor="email">
                <InputContainer
                  style={{
                    borderColor:
                      errors.email && touched.email
                        ? 'var(--input-border-color-error)'
                        : '',
                  }}
                >
                  <InputText
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
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
              </label>
              <ErrorMessage name="email">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>

              <label htmlFor="password">
                <InputContainer
                  style={{
                    borderColor:
                      errors.password && touched.password
                        ? 'var(--input-border-color-error)'
                        : '',
                  }}
                >
                  <InputText
                    type={showPassword}
                    id="password"
                    name="password"
                    placeholder="Password"
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
              </label>

              <ErrorMessage name="password">
                {msg => <ValidationError>{msg}</ValidationError>}
              </ErrorMessage>

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
