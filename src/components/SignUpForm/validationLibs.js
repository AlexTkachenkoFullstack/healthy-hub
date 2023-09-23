import * as yup from 'yup';

const emailRegexp = '[a-z0-9]+@[a-z]+.[a-z]{2,3}';
const letterRegexp = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*$';
const numberRegexp = '^(?=.*[0-9]).*$';
const onlyLatinRegexp = '^[^А-Яа-яЇїІіЄєҐґЁё]+$';

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .max(32, 'must be less 32 symbols')
    .required('Please enter name'),
  email: yup
    .string()
    .email('Example: your@email.com')
    .max(255)
    .matches(onlyLatinRegexp, 'Must include only latin letters')
    .matches(emailRegexp, 'Example: your@email.com')
    .required('Please enter email'),
  password: yup
    .string()
    .min(6, 'Password must be more than 6 symbols')
    .max(16, 'Password must be less 16 symbols')
    .matches(
      letterRegexp,
      'Must include at least 1 uppercase and lowercase symbols'
    )
    .matches(numberRegexp, 'Must include 1 number or more')
    .required('Please enter password'),
});

export const goalSchema = yup.object().shape({
  goal: yup.string().required('Choose on of ...'),
});

export const genderAgeSchema = yup.object().shape({
  age: yup
    .number('Must be a number from 1 to 200')
    .min(1, 'Must be a number from 1 to 200')
    .max(200, 'Must be a number from 1 to 200')
    .required('Age required'),
});

export const bodyParamSchema = yup.object().shape({
  heigh: yup.number('Must be a number from 1 to 300'),
  weight: yup.number('Must be a number from 1 to 300'),
});

export const activitySchema = yup.object().shape({});
