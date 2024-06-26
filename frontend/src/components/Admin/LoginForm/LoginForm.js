import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../../api/user";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks";
import "./LoginForm.scss";

function initialValues() {
  return {
    email: "",
    password: ""
  }
}

function validateSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  }
}


export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validateSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <Form.Input name="email" placeholder="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        />
      <Form.Input name="password" placeholder="Contraseña" 
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        />
        <Button type="submit" content="Iniciar sesión"/>
    </Form>
  )
}