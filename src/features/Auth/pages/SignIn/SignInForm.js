import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import validationSchema from './validationSchema';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import Link from '../../components/Link/Link';
import { StyledForm } from '../../modules/StyledForm';

const SignUpForm = function () {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem(values.email));
      if (!user) {
        console.log('Wrong password/email');
        return;
      }
      if (user.password !== values.password) {
        console.log('Wrong password/email');
        return;
      }
      navigate('/clinic/user');
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Header text="Sign In" isSignUp={false} />

      <Input
        name="email"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.email}
        touched={formik.touched.email}
        error={formik.errors.email}
      />
      <Input
        name="password"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.password}
        touched={formik.touched.password}
        error={formik.errors.password}
      />

      <ButtonSubmit type="submit">
        <span>Sign In</span>
      </ButtonSubmit>

      <Link isFooter={false} linkText="Forgot Password?" path="/restore-pass" />

      <Link isFooter text="Dont have an account?" linkText="Sign Up" path="/signup" />

    </StyledForm>
  );
};

export default SignUpForm;
