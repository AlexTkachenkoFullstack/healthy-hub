import { Formik, Form, Field } from 'formik';
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

const SignUpFirst = ({ goNext, regUser }) => {
  return (
    <Formik>
      {() => (
        <Form>
          <p>Name</p>
          <Field name="name" />
          <p>E-mail</p>
          <Field name="email" />
          <p>Password</p>
          <Field name="password" />
          <button type="submit" onClick={goNext}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpFirst;
