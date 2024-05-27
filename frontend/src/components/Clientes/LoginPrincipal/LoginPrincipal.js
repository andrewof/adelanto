import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../../api/user";
import { toast } from "react-toastify";
import { useAuth, useUser } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import "./LoginPrincipal.scss";

function initialValues() {
  return {
    email: "",
    password: "",
  }
}

function validateSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true)
  }
}


export function LoginForm({ auth }) {
  const { login, } = useAuth();
  const { getMe } = useUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validateSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
        const me = await getMe(access);
        if (me.is_staff) {
          navigate("/admin")
        } else if (me.profesion) {
          navigate("/tecnico")
        } else {
          navigate("/")
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return (
    <Form className="login-form-home" onSubmit={formik.handleSubmit}>
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