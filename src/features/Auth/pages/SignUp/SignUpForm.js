import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import Input from "../../components/Input/Input";
import Header  from "../../components/Header/Header";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import Link from '../../components/Link/Link'
import { StyledForm } from "../../modules/StyledForm";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem(values.email, JSON.stringify(values));
      navigate('/signin')
    }
  })

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Header text='Sign Up' isSignUp={true} />
      <Input
        name='firstName'
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.firstName}
        touched={formik.touched.firstName}
        error={formik.errors.firstName} />
      <Input
        name='lastName'
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.lastName}
        touched={formik.touched.lastName}
        error={formik.errors.lastName} />
      <Input
        name='email'
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.email}
        touched={formik.touched.email}
        error={formik.errors.email} />
      <Input
        name='password'
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.password}
        touched={formik.touched.password}
        error={formik.errors.password} />
      <Input
        name='confirmPassword'
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        touched={formik.touched.confirmPassword}
        error={formik.errors.confirmPassword} />

      <ButtonSubmit type='submit'>
        <span>Sign Up</span>
      </ButtonSubmit>

      <Link isFooter={true} text='Already have an account?' linkText='Sign in' path='/signin'/>

    </StyledForm>
  );
};

export default SignUpForm;
