import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Must be 4 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Field required'),
  lastName: Yup.string()
    .min(4, 'Must be 4 characters or more')
    .max(20, 'Must be 20 characters or less')
    .required('Field required'),
  email: Yup.string().email('Invalid email address').required('Field required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .required('Field required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Field required'),
});

export default validationSchema;
