import { Formik, Form, Field } from 'formik';

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
