import * as yup from 'yup';
const emailRegexp = '[a-z0-9]+@[a-z]+.[a-z]{2,3}';
const letterRegexp = '^(?=.*[a-zA-Z]).*$';
const numberRegexp = '^(?=.*[0-9]).*$';
const onlyLatinRegexp = '^[^А-Яа-яЇїІіЄєҐґЁё]+$';
export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Example: your@email.com')
    .label('Email')
    .max(255)
    .matches(onlyLatinRegexp, 'Must include only latin letters')
    .matches(emailRegexp, 'Example: your@email.com')
    .required('Please enter email'),
  password: yup
    .string()
    .min(6, 'Password must be more than 6 symbols')
    .max(16, 'Password must be less 16 symbols')
    .label('Password')
    .matches(letterRegexp, 'Must include at least 1  symbols')
    .matches(numberRegexp, 'Must include 1 number or more')
    .required('Please enter password'),
});
export const forgotSchema = yup.object().shape({
  email: yup
    .string()
    .email('Example: your@email.com')
    .label('Email')
    .max(255)
    .matches(onlyLatinRegexp, 'Must include only latin letters')
    .matches(emailRegexp, 'Example: your@email.com')
    .required('Please enter email'),
});
