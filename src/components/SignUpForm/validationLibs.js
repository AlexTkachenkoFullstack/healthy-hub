import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  name: yup.string().required('Please enter name'),
  email: yup.string().email().required('Please enter valid email.'),
  password: yup
    .string()
    .min(6, 'Password must be more than 6 symbols')
    .max(16, 'Password must be less 16 symbols')
    .required('Please enter password'),
});
