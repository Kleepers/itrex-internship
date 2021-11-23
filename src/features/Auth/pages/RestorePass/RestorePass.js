import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import validationSchema from './validationSchema';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import { StyledForm } from '../../modules/StyledForm';
import AuthText from '../../components/AuthText/AuthText';
import { StyledHeaderIcon } from '../../modules/StyledHeaderIcon';

const RestorePass = function () {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem(values.email, JSON.stringify(values));
      navigate('/signin');
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Header text="Restore Password">
        <StyledHeaderIcon />
      </Header>

      <AuthText>Please use your email address, and we’ll send you the link to reset your password</AuthText>

      <Input
        name="email"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.email}
        touched={formik.touched.email}
        error={formik.errors.email}
      />

      <ButtonSubmit type="submit">
        <span>Send Reset Link</span>
      </ButtonSubmit>

    </StyledForm>
  );
};

export default RestorePass;
