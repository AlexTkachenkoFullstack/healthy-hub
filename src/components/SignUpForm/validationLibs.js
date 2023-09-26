import * as yup from 'yup';

const emailRegexp = '[a-z0-9]+@[a-z]+.[a-z]{2,3}';
const letterRegexp = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*$';
const numberRegexp = '^(?=.*[0-9]).*$';
const onlyLatinRegexp = '^[^А-Яа-яЇїІіЄєҐґЁё]+$';

export const signupSchema = yup.object({
  name: yup
    .string()
    .label('Name')
    .min(3, 'must be more 3 symbols')
    .max(32, 'must be less 32 symbols')
    .required('Please enter name'),
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
    .matches(
      letterRegexp,
      'Must include at least 1 uppercase and lowercase symbols'
    )
    .matches(numberRegexp, 'Must include 1 number or more')
    .required('Please enter password'),
});

export const goalSchema = yup.object({
  goal: yup.string().required('Choose on of ...'),
});

export const genderAgeSchema = yup.object({
  gender: yup.string().required('Choose on of ...'),
  age: yup
    .number('Must be a number from 1 to 200')
    .label('Age')
    .min(1, 'Must be a number from 1 to 200')
    .max(200, 'Must be a number from 1 to 200')
    .required('Age required'),
});

export const bodyParamSchema = yup.object({
  height: yup
    .number('Must be a number from 1 to 300')
    .label('Heigh')
    .min(1, 'Must be a number from 1 to 300')
    .max(300, 'Must be a number from 1 to 300')
    .required('Height is required'),
  weight: yup
    .number('Must be a number from 1 to 300')
    .label('Weight')
    .min(1, 'Must be a number from 1 to 400')
    .max(300, 'Must be a number from 1 to 400')
    .required('Weight is required'),
});

export const activitySchema = yup.object({
  activity: yup.string().required('Choose on of ...'),
});
